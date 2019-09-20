(function(t){function e(e){for(var r,n,i=e[0],c=e[1],l=e[2],u=0,p=[];u<i.length;u++)n=i[u],Object.prototype.hasOwnProperty.call(s,n)&&s[n]&&p.push(s[n][0]),s[n]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(t[r]=c[r]);d&&d(e);while(p.length)p.shift()();return o.push.apply(o,l||[]),a()}function a(){for(var t,e=0;e<o.length;e++){for(var a=o[e],r=!0,i=1;i<a.length;i++){var c=a[i];0!==s[c]&&(r=!1)}r&&(o.splice(e--,1),t=n(n.s=a[0]))}return t}var r={},s={app:0},o=[];function n(e){if(r[e])return r[e].exports;var a=r[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=t,n.c=r,n.d=function(t,e,a){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)n.d(a,r,function(e){return t[e]}.bind(null,r));return a},n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=e,i=i.slice();for(var l=0;l<i.length;l++)e(i[l]);var d=c;o.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"007d":function(t,e,a){"use strict";var r=a("577c"),s=a.n(r);s.a},"034f":function(t,e,a){"use strict";var r=a("64a9"),s=a.n(r);s.a},"3f02":function(t,e,a){"use strict";var r=a("cd91"),s=a.n(r);s.a},"478e":function(t,e,a){},"56d7":function(t,e,a){"use strict";a.r(e);a("cadf"),a("551c"),a("f751"),a("097d");var r=a("2b0e"),s=a("8c4f"),o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("Header"),a("div",{staticClass:"view",staticStyle:{"background-image":"url('https://images.pexels.com/photos/351283/pexels-photo-351283.jpeg?cs=srgb&dl=bay-beach-brazil-351283.jpg&fm=jpg')","background-repeat":"repeat","background-size":"cover","background-position":"center","background-attachment":"fixed"}},[a("div",{staticClass:"container"},[a("AddTodo",{on:{"add-todo":t.addTodo}}),a("div",{staticClass:"row"},[a("div",{staticClass:"col-sm col-md col-lg"},[a("button",{staticClass:"viewFilters allBtn",class:{active:t.filter="all"},on:{click:function(e){return t.runFilter("all")}}},[t._v("View All Tasks")])])]),a("div",{staticClass:"row"},[a("div",{staticClass:"col-sm-2 col-md-2 col-lg-2"},[a("button",{staticClass:"viewFilters personalFilter",class:{active:t.filter="personal"},on:{click:function(e){return t.runFilter("personal")}}},[t._v("View Personal Tasks")])]),a("div",{staticClass:"col-sm-4 col-md-4 col-lg-4"},[a("button",{staticClass:"viewFilters teamFilter",class:{active:t.filter="team"},on:{click:function(e){return t.runFilter("team")}}},[t._v("View Team Tasks")])]),a("div",{staticClass:"col-sm-6 col-md-6 col-lg-6"},[a("button",{staticClass:"clearDoneBtn",on:{click:function(e){return t.clearDone("done")}}},[t._v("Clear Done Tasks")])])]),a("div",{staticClass:"row"},[a("Board",{staticClass:"col-sm-12 col-md-3 col-lg-3 boards",attrs:{id:"ToDos"}},[a("h3",[t._v("To Do")]),t._l(t.cardsFiltered,function(e,r){return a("Card",{directives:[{name:"show",rawName:"v-show",value:"todo"==e.status,expression:"card.status =='todo'"}],key:r,staticClass:"cardStyle"},[a("h5",{staticClass:"card-title"},[t._v(t._s(e.title))]),a("h6",{staticClass:"card-title"},[t._v("Category: "+t._s(e.category))]),a("p",{staticClass:"card-text"},[t._v(t._s(e.description))]),a("p",{attrs:{"data-id":e.id}}),a("button",{staticClass:"btn btn-secondary btn-sm cardBtns",attrs:{type:"button"},on:{click:function(a){return t.updateTodo(e.id,e.title,e.category,e.description,e.status)}}},[t._v("Move Forward")]),a("button",{staticClass:"btn btn-primary btn-sm cardBtns",attrs:{"data-id":e.id,href:"#"},on:{click:function(a){return t.deleteTodo(e.id)}}},[t._v("Delete")])])})],2),a("Board",{staticClass:"col-sm-12 col-md-3 col-lg-3 boards",attrs:{id:"inProgress"}},[a("h3",[t._v("In Progress")]),t._l(t.cardsFiltered,function(e,r){return a("Card",{directives:[{name:"show",rawName:"v-show",value:"inProgress"==e.status,expression:"card.status =='inProgress'"}],key:r,staticClass:"cardStyle"},[a("h5",{staticClass:"card-title"},[t._v(t._s(e.title))]),a("h6",{staticClass:"card-title"},[t._v("Category: "+t._s(e.category))]),a("p",{staticClass:"card-text"},[t._v(t._s(e.description))]),a("p",{attrs:{"data-id":e.id}}),a("button",{staticClass:"btn btn-secondary btn-sm cardBtns",attrs:{type:"button"},on:{click:function(a){return t.updateTodo(e.id,e.title,e.category,e.description,e.status)}}},[t._v("Move Forward")]),a("button",{staticClass:"btn btn-primary btn-sm cardBtns",attrs:{"data-id":e.id,href:"#"},on:{click:function(a){return t.deleteTodo(e.id)}}},[t._v("Delete")])])})],2),a("Board",{staticClass:"col-sm-12 col-md-3 col-lg-3 boards",attrs:{id:"inProgressWaiting"}},[a("h3",[t._v("In Progress - Waiting")]),t._l(t.cardsFiltered,function(e,r){return a("Card",{directives:[{name:"show",rawName:"v-show",value:"inProgressWaiting"==e.status,expression:"card.status =='inProgressWaiting'"}],key:r,staticClass:"cardStyle"},[a("h5",{staticClass:"card-title"},[t._v(t._s(e.title))]),a("h6",{staticClass:"card-title"},[t._v("Category: "+t._s(e.category))]),a("p",{staticClass:"card-text"},[t._v(t._s(e.description))]),a("p",{attrs:{"data-id":e.id}}),a("button",{staticClass:"btn btn-secondary btn-sm cardBtns",attrs:{type:"button"},on:{click:function(a){return t.updateTodo(e.id,e.title,e.category,e.description,e.status)}}},[t._v("Move Forward")]),a("button",{staticClass:"btn btn-primary btn-sm cardBtns",attrs:{"data-id":e.id,href:"#"},on:{click:function(a){return t.deleteTodo(e.id)}}},[t._v("Delete")])])})],2),a("Board",{staticClass:"col-sm-12 col-md-3 col-lg-3 boards",attrs:{id:"completed"}},[a("h3",[t._v("Done!")]),t._l(t.cardsFiltered,function(e,r){return a("Card",{directives:[{name:"show",rawName:"v-show",value:"done"==e.status,expression:"card.status =='done'"}],key:r,staticClass:"cardStyle"},[a("h5",{staticClass:"card-title"},[t._v(t._s(e.title))]),a("h6",{staticClass:"card-title"},[t._v("Category: "+t._s(e.category))]),a("p",{staticClass:"card-text"},[t._v(t._s(e.description))]),a("p",{attrs:{"data-id":e.id}}),a("button",{staticClass:"btn btn-primary btn-sm cardBtns",attrs:{"data-id":e.id,href:"#"},on:{click:function(a){return t.deleteTodo(e.id)}}},[t._v("Delete")])])})],2)],1)],1)])],1)},n=[],i=a("75fc"),c=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},l=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("header",{staticClass:"header"},[a("h3",[t._v("2canBoard")])])}],d={name:"Header"},u=d,p=(a("e929"),a("2877")),f=Object(p["a"])(u,c,l,!1,null,"774748c3",null),v=f.exports,g=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("button",{staticClass:"btn btn-info addTaskBtn",on:{click:function(e){t.show=!t.show}}},[t._v("Add Task")]),t.show?a("form",[a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"title"}},[t._v("Task Title")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.title,expression:"title"}],staticClass:"form-control",attrs:{type:"text",id:"title",placeholder:"Add Title..."},domProps:{value:t.title},on:{input:function(e){e.target.composing||(t.title=e.target.value)}}})]),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"cat"}},[t._v("Category")]),a("select",{directives:[{name:"model",rawName:"v-model",value:t.category,expression:"category"}],staticClass:"form-control",attrs:{id:"cat"},on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){var e="_value"in t?t._value:t.value;return e});t.category=e.target.multiple?a:a[0]}}},[a("option",[t._v("...")]),a("option",[t._v("Personal")]),a("option",[t._v("Team")])])]),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"desc"}},[t._v("Description")]),a("textarea",{directives:[{name:"model",rawName:"v-model",value:t.description,expression:"description"}],staticClass:"form-control",attrs:{id:"desc",rows:"3",placeholder:"What do you have to do?"},domProps:{value:t.description},on:{input:function(e){e.target.composing||(t.description=e.target.value)}}}),t._v("\n      "+t._s(this.title)+t._s(this.category)+t._s(this.description)+"\n    ")]),a("button",{staticClass:"submitTask",on:{click:t.addTodo}},[t._v("Submit")])]):t._e()])},h=[],m={name:"AddTodo",data:function(){return{title:"",category:"",description:"",show:!1}},methods:{addTodo:function(t){t.preventDefault();var e={title:this.title,category:this.category,description:this.description,status:"todo"};this.$emit("add-todo",e),this.title="",this.category="",this.description=""}}},b=m,_=(a("3f02"),Object(p["a"])(b,g,h,!1,null,"487470a7",null)),y=_.exports,C=a("bc3a"),w=a.n(C),T=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{attrs:{id:t.id},on:{dragover:function(t){t.preventDefault()},drop:function(e){return e.preventDefault(),t.drop(e)}}},[t._t("default")],2)])},k=[],x={name:"Board",props:["id"],methods:{drop:function(t){var e=t.dataTransfer.getData("card_id"),a=document.getElementById(e);a.style.display="block",t.target.appendChild(a)}}},F=x,P=(a("d64f"),Object(p["a"])(F,T,k,!1,null,"52e4cc0b",null)),j=P.exports,B=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"card",staticStyle:{width:"18rem"}},[a("div",{staticClass:"card-body"},[t._t("default")],2)])},O=[],D={props:["id","draggable"],methods:{dragStart:function(t){var e=t.target;t.dataTransfer.setData("card_id",e.id),setTimeout(function(){e.style.display="none"},0)}}},S=D,$=(a("007d"),Object(p["a"])(S,B,O,!1,null,"40ab24f1",null)),A=$.exports,E={name:"app",components:{Header:v,AddTodo:y,Board:j,Card:A},data:function(){return{cards:[],cardsFiltered:[],filter:"all"}},methods:{runFilter:function(t){console.log("filter running"),"all"==t?this.cardsFiltered=this.cards:"personal"==t?(this.cardsFiltered=this.cards.filter(function(t){return"Personal"==t.category}),console.log("Personal tasks"),console.log(this.cardsFiltered)):"team"==t&&(this.cardsFiltered=this.cards.filter(function(t){return"Team"==t.category}))},deleteTodo:function(t){var e=this;w.a.delete("/api/todos/"+t).then(function(t){return e.cards=t.data}).catch(function(t){return console.log(t)}),w.a.get("/api/todos").then(function(t){return e.cardsFiltered=e.cards=t.data}).catch(function(t){return console.log(t)})},addTodo:function(t){var e=this,a=t.title,r=t.category,s=t.description;t.status;w.a.post("/api/todos",{title:a,category:r,description:s,status:"todo"}).then(function(t){return e.cardsFiltered=[].concat(Object(i["a"])(e.cardsFiltered),[t.data])}).catch(function(t){return console.log(t)})},updateTodo:function(t,e,a,r,s){var o=this;"todo"===s?s="inProgress":"inProgress"===s?s="inProgressWaiting":"inProgressWaiting"===s&&(s="done"),console.log(t,e,a,r,s),w.a.put("/api/todos",{id:t,title:e,category:a,description:r,status:s}).then(function(t){return o.cards=[].concat(Object(i["a"])(o.cards),[t.data])}).catch(function(t){return console.log(t)}),console.log("this is updated"),w.a.get("/api/todos").then(function(t){return o.cardsFiltered=o.cards=t.data}).catch(function(t){return console.log(t)})},clearDone:function(t){var e=this,a=this.cards.filter(function(t){return"done"==t.status});console.log(a),w.a.delete("/api/todos",{data:a}).then(function(t){return e.cards=t.data}).catch(function(t){return console.log(t)}),w.a.get("/api/todos").then(function(t){return e.cardsFiltered=e.cards=t.data}).catch(function(t){return console.log(t)})}},created:function(){var t=this;w.a.get("/api/todos").then(function(e){t.cardsFiltered=t.cards=e.data}).catch(function(t){return console.log(t)})}},M=E,N=(a("034f"),Object(p["a"])(M,o,n,!1,null,null,null)),W=N.exports;r["a"].config.productionTip=!1,r["a"].use(s["a"]),new r["a"]({render:function(t){return t(W)}}).$mount("#app")},"577c":function(t,e,a){},"64a9":function(t,e,a){},c173:function(t,e,a){},cd91:function(t,e,a){},d64f:function(t,e,a){"use strict";var r=a("478e"),s=a.n(r);s.a},e929:function(t,e,a){"use strict";var r=a("c173"),s=a.n(r);s.a}});
//# sourceMappingURL=app.3c29cbaf.js.map