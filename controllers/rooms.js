const moment = require('moment')
const roomsRouter = require('express').Router()
const telegramBotService = require('../services/messageService')
const Reservation = require('../models/reservation')
const Room = require('../models/room')
const User = require('../models/user')

roomsRouter.get('/', async (req, res) => {
  const rooms = await Room.find({})
  res.json(rooms.map(u => u.toJSON()))
})

roomsRouter.get('/:code', async (req, res) => {
  const localTimeString = moment()
  const currentTime = moment(localTimeString, 'YYYY-MM-DD HH:mm:sss')

  const room = await Room.findOne({ code: req.params.code })
    .populate({
      path: 'reservations',
      match: { endTime: { $gte: currentTime } },
    })

  if (!room) {
    return res.status(400).send({ error: 'room not found' })
  }

  res.json(room.toJSON())
})

roomsRouter.post('/:id/reservation', async (req, res, next) => {
  const body = req.body

  try {
    const localTimeString = moment()
    const currentTime = moment(localTimeString, 'YYYY-MM-DD HH:mm:sss')

    const room = await Room.findById(req.params.id)
      .populate({
        path: 'reservations',
        match: { endTime: { $gte: currentTime } },
      })

    if (!room) {
      return res.status(400).send({ error: 'room not found' })
    }

    if (room.reservations.length) {
      return res.status(400).send({ error: 'room is full' })
    }

    if (!body.username) {
      return res.status(401).json({ error: 'username missing' })
    }

    if (!body.channelId) {
      return res.status(401).json({ error: 'channel missing' })
    }

    let user = await User.findOne({ username: body.username })

    if (!user) {
      const newUser = new User({
        username: body.username,
      })
      user = await newUser.save()
    }

    const reservation = new Reservation({
      name: body.name,
      startTime: body.startTime || new Date().toISOString(),
      endTime: body.endTime || new Date(Date.now() + (1000 * 60 * 60)).toISOString(),
      user: user._id,
      room: room._id
    })

    const savedReservation = await reservation.save()

    room.reservations = room.reservations.concat(savedReservation._id)
    await room.save()

    user.reservations = user.reservations.concat(savedReservation._id)
    await user.save()
    // let's send a message to Telegram

    let messageByRoomCode

    if (room.code === '123') {
      messageByRoomCode =
        `Creator: <b>${user.username}</b>\n` +
        `Subject: <b>${reservation.name}</b>\n` +
        `Room: <b>${room.name}</b>\n` +
        `Time: <b>${moment(reservation.startTime).format('HH.mm')}-${moment(reservation.endTime).format('HH.mm')}</b>`
    } else {
      messageByRoomCode =
        `<b>${user.username}</b> just created a new study group: <i>"${reservation.name}"</i>\n\n` +
        `Feel free to join in room <b>${room.name}</b> ` +
        `anytime from ${moment(reservation.startTime).format('HH.mm')} to ${moment(reservation.endTime).format('HH.mm')}!`
    }

    telegramBotService.sendMessage(body.channelId, messageByRoomCode)

    await Reservation
      .populate(savedReservation, [
        { path: 'user', select: { 'id': 1, 'username': 1 } },
        { path: 'room', select: { 'id': 1, 'name': 1, 'code': 1 } }
      ])

    res.json(savedReservation.toJSON())
  } catch(exception) {
    next(exception)
  }
})

module.exports = roomsRouter
