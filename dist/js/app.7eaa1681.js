(function(t){function e(e){for(var a,s,c=e[0],i=e[1],d=e[2],u=0,f=[];u<c.length;u++)s=c[u],Object.prototype.hasOwnProperty.call(n,s)&&n[s]&&f.push(n[s][0]),n[s]=0;for(a in i)Object.prototype.hasOwnProperty.call(i,a)&&(t[a]=i[a]);l&&l(e);while(f.length)f.shift()();return o.push.apply(o,d||[]),r()}function r(){for(var t,e=0;e<o.length;e++){for(var r=o[e],a=!0,c=1;c<r.length;c++){var i=r[c];0!==n[i]&&(a=!1)}a&&(o.splice(e--,1),t=s(s.s=r[0]))}return t}var a={},n={app:0},o=[];function s(e){if(a[e])return a[e].exports;var r=a[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,s),r.l=!0,r.exports}s.m=t,s.c=a,s.d=function(t,e,r){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(s.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)s.d(r,a,function(e){return t[e]}.bind(null,a));return r},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],i=c.push.bind(c);c.push=e,c=c.slice();for(var d=0;d<c.length;d++)e(c[d]);var l=i;o.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("56d7")},"034f":function(t,e,r){"use strict";var a=r("64a9"),n=r.n(a);n.a},"04a6":function(t,e,r){},"457e":function(t,e,r){"use strict";var a=r("c743"),n=r.n(a);n.a},"478e":function(t,e,r){},"56d7":function(t,e,r){"use strict";r.r(e);r("cadf"),r("551c"),r("f751"),r("097d");var a=r("2b0e"),n=r("8c4f"),o=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"app"}},[r("Header"),r("div",{staticClass:"container"},[r("AddTodo",{on:{"add-todo":t.addTodo}}),r("div",{staticClass:"row"},[r("Board",{staticClass:"col-md-3",attrs:{id:"board-1"}},t._l(t.cards,function(e,a){return r("Card",{key:a,attrs:{id:"card-1",draggable:"true"}},[r("h5",{staticClass:"card-title"},[t._v(t._s(t.cards[a].title))]),r("h6",{staticClass:"card-title"},[t._v(t._s(t.cards[a].category))]),r("p",{staticClass:"card-text"},[t._v(t._s(t.cards[a].description))]),r("a",{staticClass:"btn btn-primary",attrs:{href:"#"},on:{click:t.deleteTodo}},[t._v("Delete Me")])])}),1),r("Board",{staticClass:"col-md-3",attrs:{id:"board-2"}},t._l(t.cards,function(e,a){return r("Card",{key:a,attrs:{id:"card-2",draggable:"true"}},[r("p",[t._v(t._s(t.cards[a].cardname)),r("br"),t._v(t._s(t.cards[a].cardTitle)),r("br"),t._v(t._s(t.cards[a].owner)),r("br"),t._v(t._s(t.cards[a].category))])])}),1),r("Board",{staticClass:"col-md-3",attrs:{id:"board-3"}},t._l(t.cards,function(e,a){return r("Card",{key:a,staticClass:"card",attrs:{id:"card-3",draggable:"true"}},[r("p",[t._v(t._s(t.cards[a].cardname)),r("br"),t._v(t._s(t.cards[a].cardTitle)),r("br"),t._v(t._s(t.cards[a].owner)),r("br"),t._v(t._s(t.cards[a].category))])])}),1),r("Board",{staticClass:"col-md-3",attrs:{id:"board-4"}},t._l(t.cards,function(e,a){return r("Card",{key:a,staticClass:"card",attrs:{id:"card-4",draggable:"true"}},[r("p",[t._v(t._s(t.cards[a].cardname)),r("br"),t._v(t._s(t.cards[a].cardTitle)),r("br"),t._v(t._s(t.cards[a].owner)),r("br"),t._v(t._s(t.cards[a].category))])])}),1)],1)],1)],1)},s=[],c=r("75fc"),i=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},d=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("header",{staticClass:"header"},[r("h1",[t._v("2CanBoard")])])}],l={name:"Header"},u=l,f=(r("afff"),r("2877")),p=Object(f["a"])(u,i,d,!1,null,"1f7e3ca7",null),v=p.exports,_=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("button",{staticClass:"btn btn-info",on:{click:function(e){t.show=!t.show}}},[t._v("Add Task")]),t.show?r("form",[r("div",{staticClass:"form-group"},[r("label",{attrs:{for:"Input1"}},[t._v("Task Title")]),r("input",{directives:[{name:"model",rawName:"v-model",value:t.title,expression:"title"}],staticClass:"form-control",attrs:{type:"text",id:"Input1",placeholder:"Add Title..."},domProps:{value:t.title},on:{input:function(e){e.target.composing||(t.title=e.target.value)}}})]),r("div",{staticClass:"form-group"},[r("label",{attrs:{for:"cat"}},[t._v("Category")]),r("select",{directives:[{name:"model",rawName:"v-model",value:t.category,expression:"category"}],staticClass:"form-control",attrs:{id:"cat"},on:{change:function(e){var r=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){var e="_value"in t?t._value:t.value;return e});t.category=e.target.multiple?r:r[0]}}},[r("option",[t._v("...")]),r("option",[t._v("Personal")]),r("option",[t._v("Team")])])]),r("div",{staticClass:"form-group"},[r("label",{attrs:{for:"desc"}},[t._v("Description")]),r("textarea",{directives:[{name:"model",rawName:"v-model",value:t.description,expression:"description"}],staticClass:"form-control",attrs:{id:"desc",rows:"3",placeholder:"description"},domProps:{value:t.description},on:{input:function(e){e.target.composing||(t.description=e.target.value)}}}),t._v("\n     "+t._s(this.title)+t._s(this.category)+t._s(this.description)+"\n    ")]),r("button",{on:{click:t.addTodo}},[t._v("Submit")])]):t._e()])},m=[],b={name:"AddTodo",data:function(){return{title:"",category:"",description:"",show:!1}},methods:{addTodo:function(t){t.preventDefault();var e={title:this.title,category:this.category,description:this.description,status:"todo"};this.$emit("add-todo",e),this.title="",this.category="",this.description=""}}},h=b,g=(r("457e"),Object(f["a"])(h,_,m,!1,null,"7d31b2c8",null)),y=g.exports,C=r("bc3a"),w=r.n(C),T=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("div",{attrs:{id:t.id},on:{dragover:function(t){t.preventDefault()},drop:function(e){return e.preventDefault(),t.drop(e)}}},[t._t("default")],2)])},x=[],O={name:"Board",props:["id"],methods:{drop:function(t){var e=t.dataTransfer.getData("card_id"),r=document.getElementById(e);r.style.display="block",t.target.appendChild(r)}}},j=O,k=(r("d64f"),Object(f["a"])(j,T,x,!1,null,"52e4cc0b",null)),P=k.exports,B=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"card",staticStyle:{width:"18rem"}},[r("div",{staticClass:"card-body"},[t._t("default")],2)])},S=[],$={props:["id","draggable"],methods:{dragStart:function(t){var e=t.target;t.dataTransfer.setData("card_id",e.id),setTimeout(function(){e.style.display="none"},0)}}},D=$,E=(r("f0be"),Object(f["a"])(D,B,S,!1,null,"def8fab0",null)),A=E.exports,M={name:"app",components:{Header:v,AddTodo:y,Board:P,Card:A},data:function(){return{cards:[]}},methods:{deleteTodo:function(t){var e=this;w.a.delete("/api/todos/:id").then(function(r){return e.todos=e.todos.filter(function(e){return e.id!==t})}).catch(function(t){return console.log(t)})},addTodo:function(t){var e=this,r=t.title,a=t.category,n=t.description;t.status;w.a.post("/api/todos",{title:r,category:a,description:n,status:"todo"}).then(function(t){return e.cards=[].concat(Object(c["a"])(e.cards),[t.data])}).catch(function(t){return console.log(t)})}},created:function(){var t=this;w.a.get("/api/todos").then(function(e){return t.cards=e.data}).catch(function(t){return console.log(t)})}},H=M,I=(r("034f"),Object(f["a"])(H,o,s,!1,null,null,null)),N=I.exports;a["a"].config.productionTip=!1,a["a"].use(n["a"]),new a["a"]({render:function(t){return t(N)}}).$mount("#app")},"64a9":function(t,e,r){},"9efa":function(t,e,r){},afff:function(t,e,r){"use strict";var a=r("04a6"),n=r.n(a);n.a},c743:function(t,e,r){},d64f:function(t,e,r){"use strict";var a=r("478e"),n=r.n(a);n.a},f0be:function(t,e,r){"use strict";var a=r("9efa"),n=r.n(a);n.a}});
//# sourceMappingURL=app.7eaa1681.js.map