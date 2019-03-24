(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{192:function(e,t,a){e.exports=a(343)},223:function(e,t,a){},343:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(41),o=a.n(c),u=a(27),l=(a(201),a(62)),i=a(114),s=a(15),m=a.n(s),p=a(21),d=a(55),f=a.n(d),E=a(105);a.n(E)()().format();var v=function(){var e=Object(p.a)(m.a.mark(function e(){var t;return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.a.get("".concat("/api","/reservations"));case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}(),g=function(){var e=Object(p.a)(m.a.mark(function e(){var t;return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.a.get("".concat("/api","/rooms"));case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}(),h=function(){var e=Object(p.a)(m.a.mark(function e(t){var a;return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.a.get("".concat("/api","/rooms/").concat(t));case 2:return a=e.sent,e.abrupt("return",a.data);case 4:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),b={getAll:v,createNew:function(){var e=Object(p.a)(m.a.mark(function e(t,a){var n,r;return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n={name:t.name,username:t.username},e.next=3,f.a.post("".concat("/api","/rooms/").concat(a,"/reservation"),n);case 3:return r=e.sent,e.abrupt("return",r.data);case 5:case"end":return e.stop()}},e)}));return function(t,a){return e.apply(this,arguments)}}(),remove:function(){var e=Object(p.a)(m.a.mark(function e(t){var a;return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.a.delete("".concat("/api","/").concat(t));case 2:return a=e.sent,e.abrupt("return",a.data);case 4:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),getRooms:g,getRoom:h},w=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD":return console.log(t.data),[].concat(Object(i.a)(e),[t.data]);case"INACTIVATE":var a=t.data.id,n=e.find(function(e){return e.id===a}),r=Object(l.a)({},n,{active:!1});return e.map(function(e){return e.id===a?r:e});case"INIT_GROUPS":return t.data;case"REMOVE":return Object(i.a)(e).filter(function(e){return e.id!==t.data.id});default:return e}},x=function(e){return function(){var t=Object(p.a)(m.a.mark(function t(a){var n;return m.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,b.getRoom(e);case 2:n=t.sent,a({type:"CHANGE",data:n});case 4:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()},y={selectedRoom:null,rooms:[]},O=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:y,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"INIT":return Object(l.a)({},e,{rooms:t.data});case"CHANGE":return Object(l.a)({},e,{selectedRoom:t.data});default:return e}},R=(a(223),a(350)),j=a(362),G=a(359),k=a(357),A=a(358),I=a(352),N=a(354),C=a(356),D={changeGroup:function(e,t){return function(){var a=Object(p.a)(m.a.mark(function a(n){var r;return m.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,b.createNew(e,t);case 2:r=a.sent,n({type:"ADD",data:r});case 4:case"end":return a.stop()}},a)}));return function(e){return a.apply(this,arguments)}}()}},S=Object(u.b)(function(e){return{group:e.group,selectedRoom:e.resources.selectedRoom}},D)(Object(j.a)(function(e){var t=function(){var t=Object(p.a)(m.a.mark(function t(a){var n;return m.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:a.preventDefault(),n={name:a.target.groupname.value,username:a.target.username.value},e.changeGroup(n,e.selectedRoom.id),e.history.push("/");case 4:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}();return r.a.createElement(G.a,{centered:!0,verticalAlign:"middle"},r.a.createElement(G.a.Column,null,r.a.createElement(k.a,{as:"h2",textAlign:"center"},"Add A Group"),r.a.createElement(A.a,null,r.a.createElement(I.a,{onSubmit:t},r.a.createElement(I.a.Field,null,r.a.createElement("label",null,"Group Name"),r.a.createElement("input",{name:"groupname",placeholder:"Group Name"})),r.a.createElement(I.a.Field,null,r.a.createElement("label",null,"Username"),r.a.createElement("input",{name:"username",placeholder:"Username"})),r.a.createElement(I.a.Field,null,r.a.createElement("label",null,"Telegram Group"),r.a.createElement(N.a,{name:"telegram",placeholder:"Select telegram group",options:[{value:"DIS",text:"Designing Interactive Systems"}],selection:!0})),r.a.createElement(R.a,{to:"/"},r.a.createElement(C.a,null,"Cancel")),r.a.createElement(C.a,{disabled:null===e.selectedRoom,type:"submit",positive:!0},"Add")))))})),T=a(353),H=a(113),U=a.n(H),F=function(e){var t=e.group;return r.a.createElement(T.a.Item,null,r.a.createElement(T.a.Content,null,r.a.createElement(R.a,{to:"deleteGroup/".concat(t.id)},r.a.createElement(T.a.Header,null,t.name)),r.a.createElement(T.a.Description,null,t.room&&r.a.createElement(r.a.Fragment,null,t.room.name,r.a.createElement("br",null)),r.a.createElement(U.a,{format:"HH:mm"},t.startTime),"-",r.a.createElement(U.a,{format:"HH:mm"},t.endTime))))},M=Object(u.b)(function(e){return{activeGroups:e.group,selectedRoom:e.resources.selectedRoom}},{getRoom:x})(function(e){return r.a.createElement(A.a,{placeholder:!0,textAlign:"center"},r.a.createElement(k.a,{as:"h2",textAlign:"center"},"Active Groups"),e.activeGroups.length<1?r.a.createElement("p",null,"No active groups. Maybe create a group? "):r.a.createElement(T.a,{divided:!0,relaxed:!0,animated:!0},e.activeGroups.map(function(e){return r.a.createElement(F,{key:e.id,group:e})})),r.a.createElement(R.a,{to:"/addgroup"},r.a.createElement(C.a,{disabled:null===e.selectedRoom,primary:!0},"Add new group")))}),P=a(37),V=function(){return r.a.createElement(k.a,{as:"h1",icon:!0,textAlign:"center"},r.a.createElement(P.a,{name:"handshake"}),r.a.createElement(k.a.Content,null,"QRP",r.a.createElement(k.a.Subheader,null,"Study Together")))},B={removeGroup:function(e){return function(){var t=Object(p.a)(m.a.mark(function t(a){return m.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,b.remove(e);case 2:a({type:"REMOVE",data:{id:e}});case 3:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()}},J=Object(u.b)(null,B)(Object(j.a)(function(e){console.log(e);return r.a.createElement(G.a,{verticalAlign:"middle"},r.a.createElement(G.a.Column,null,r.a.createElement(k.a,{as:"h2",textAlign:"center"},"Delete Group"),r.a.createElement("p",null,"You are deleting group:  ",e.group.name),r.a.createElement(R.a,{to:"/"},r.a.createElement(C.a,null,"Cancel")),r.a.createElement(C.a,{onClick:function(){return t=e.group.id,e.removeGroup(t),void e.history.push("/");var t},negative:!0},"Delete")))})),L=a(355),Q=a(361),_=a(351),W={initGroups:function(){return function(){var e=Object(p.a)(m.a.mark(function e(t){var a;return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.getAll();case 2:a=e.sent,t({type:"INIT_GROUPS",data:a});case 4:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()},getRoom:x,initRooms:function(){return function(){var e=Object(p.a)(m.a.mark(function e(t){var a;return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.getRooms();case 2:a=e.sent,t({type:"INIT",data:a});case 4:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()}},Y=Object(u.b)(function(e){return{groups:e.group,rooms:e.resources.rooms,selectedRoom:e.resources.selectedRoom}},W)(function(e){console.log(e),Object(n.useEffect)(function(){e.initGroups(),e.initRooms(),t()},[]);var t=function(){var t=new URLSearchParams(window.location.search).get("room");console.log(t),t&&e.getRoom(t)};return r.a.createElement(Q.a,null,r.a.createElement("div",null,r.a.createElement(V,null),r.a.createElement(G.a,{container:!0,columns:1,relaxed:!0,stackable:!0},r.a.createElement(G.a.Column,null,r.a.createElement(_.a,{exact:!0,path:"/",render:function(){return r.a.createElement("div",null,r.a.createElement(A.a,null,r.a.createElement(L.a,{positive:!0},e.selectedRoom?r.a.createElement(L.a.Header,null,"Looks like you're in ",e.selectedRoom.name):r.a.createElement(R.a,{to:"/selectroom"},r.a.createElement(C.a,{primary:!0},"Start by choosing a room")))),r.a.createElement(M,null))}}),r.a.createElement(_.a,{exact:!0,path:"/addgroup",render:function(){return r.a.createElement(S,null)}}),r.a.createElement(_.a,{exact:!0,path:"/deleteGroup/:id",render:function(t){var a,n=t.match;return r.a.createElement(J,{group:(a=n.params.id,e.groups.find(function(e){return e.id===a}))})}}),r.a.createElement(_.a,{exact:!0,path:"/selectroom",render:function(){return r.a.createElement("div",null,r.a.createElement("h3",null,"Under construction!"),r.a.createElement("p",null,"Use QR code :)"),r.a.createElement(R.a,{to:"/"},r.a.createElement(C.a,{default:!0},"Back")))}})))))}),q=a(42),z=a(180),K=a(181),X=Object(q.combineReducers)({group:w,resources:O}),Z=Object(q.createStore)(X,Object(K.composeWithDevTools)(Object(q.applyMiddleware)(z.a)));o.a.render(r.a.createElement(u.a,{store:Z},r.a.createElement(Y,null)),document.getElementById("root"))}},[[192,1,2]]]);
//# sourceMappingURL=main.23bf1f97.chunk.js.map