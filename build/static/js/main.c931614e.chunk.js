(this["webpackJsonpmy-lil-notes"]=this["webpackJsonpmy-lil-notes"]||[]).push([[0],{15:function(e,t,n){"use strict";n.r(t);var a=n(0),l=n.n(a),r=n(7),c=n.n(r),u=n(8),o=n(4);var i=function(){var e=(new Date).getDate(),t=(new Date).getMonth(),n=(new Date).getFullYear(),a=(new Date).getDay(),r="";return 1==a?r="Monday":2==a?r="Tuesday":3==a?r="Wednesday":4==a?r="Thursday":5==a?r="Friday":6==a?r="Saturday":7==a&&(r="Sunday"),l.a.createElement("header",null,l.a.createElement("h1",null,"My Lil' Notes"),l.a.createElement("p",null,r," , ",e," / ",t," / ",n))};var m=function(){return l.a.createElement("footer",null,l.a.createElement("p",null,"Made with \u2764, by Ridham Jain"))};var d=function(e){return l.a.createElement("div",{className:"note"},l.a.createElement("h1",null,e.title),l.a.createElement("p",null,e.content),l.a.createElement("button",{onClick:function(){e.onDelete(e.id)}},"DELETE"))},E=n(3),f=n(5);var s=function(e){var t=Object(a.useState)({title:"",content:""}),n=Object(o.a)(t,2),r=n[0],c=n[1];function u(e){var t=e.target,n=t.name,a=t.value;c((function(e){return Object(f.a)(Object(f.a)({},e),{},Object(E.a)({},n,a))}))}return l.a.createElement("div",null,l.a.createElement("form",null,l.a.createElement("input",{name:"title",onChange:u,value:r.title,placeholder:"Title"}),l.a.createElement("textarea",{name:"content",onChange:u,value:r.content,placeholder:"Take a note...",rows:"3"}),l.a.createElement("button",{onClick:function(t){e.onAdd(r),c({title:"",content:""}),t.preventDefault()}}," + ")))};var v=function(){var e=Object(a.useState)([]),t=Object(o.a)(e,2),n=t[0],r=t[1];function c(e){r((function(t){return t.filter((function(t,n){return n!==e}))}))}return l.a.createElement("div",null,l.a.createElement(i,null),l.a.createElement(s,{onAdd:function(e){r((function(t){return[].concat(Object(u.a)(t),[e])}))}}),n.map((function(e,t){return l.a.createElement(d,{key:t,id:t,title:e.title,content:e.content,onDelete:c})})),l.a.createElement(m,null))};c.a.render(l.a.createElement(v,null),document.getElementById("root"))},9:function(e,t,n){e.exports=n(15)}},[[9,1,2]]]);
//# sourceMappingURL=main.c931614e.chunk.js.map