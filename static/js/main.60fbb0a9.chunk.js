(this["webpackJsonpfood-generate"]=this["webpackJsonpfood-generate"]||[]).push([[0],{54:function(e,n,t){"use strict";t.r(n);t(1);var r,i,c=t(29),a=t.n(c),o=t(25),s=t.n(o),d=t(30),j=t(72),p=t(17),u=t(18),f=u.a.div(r||(r=Object(p.a)(["\n  display: flex;\n  justify-content: space-between;\n  width: 100%;\n  height: 100%;\n  flex-direction: column;\n  border: 1px solid;\n\n  img {\n    height: 250px;\n    width: 100%;\n    object-fit: cover;\n    border-radius: 20px 20px 0 0;\n    border: 1px;  \n  }\n\n  div {\n    font-family: Arial, Helvetica, sans-serif;\n    padding: 1rem;\n    height: 100%;\n  }\n"]))),h=t(5),l=function(e){var n=e.food;return Object(h.jsxs)(f,{children:[Object(h.jsx)("img",{src:n.imageData,alt:n.foodName}),Object(h.jsxs)("div",{children:[Object(h.jsx)("h3",{children:n.foodName}),Object(h.jsxs)("p",{children:["Liked: ",n.liked]})]})]})},b=t(70),x=t(73),O=u.a.div(i||(i=Object(p.a)(["\n  margin: 40px;\n"]))),m=function(){var e=Object(d.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://foodgenerateapi.herokuapp.com/api/foods");case 2:return e.next=4,e.sent.json();case 4:return e.abrupt("return",e.sent);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),g=function(){var e=Object(j.a)("foods",m),n=e.data,t=e.isLoading,r=e.error;return console.log(n),r?Object(h.jsx)("div",{children:"....error....."}):t?Object(h.jsx)(x.a,{}):Object(h.jsx)(O,{children:Object(h.jsx)(b.a,{container:!0,spacing:3,children:null===n||void 0===n?void 0:n.map((function(e){return Object(h.jsx)(b.a,{item:!0,xs:12,sm:4,children:Object(h.jsx)(l,{food:e})},e.id)}))})})},v=t(71),w=t(34),k=new v.a;a.a.render(Object(h.jsx)(w.a,{client:k,children:Object(h.jsx)(g,{})}),document.getElementById("root"))}},[[54,1,2]]]);
//# sourceMappingURL=main.60fbb0a9.chunk.js.map