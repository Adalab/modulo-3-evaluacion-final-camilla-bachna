(this["webpackJsonpmodule-3-lesson-2-exercise"]=this["webpackJsonpmodule-3-lesson-2-exercise"]||[]).push([[0],{15:function(e,t,c){},29:function(e,t,c){"use strict";c.r(t);var a=c(0),s=c(17),r=c.n(s),n=c(7),i=c(14),l=c(2),o=function(){return fetch("https://rickandmortyapi.com/api/character").then((function(e){return e.json()})).then((function(e){return e.results.map((function(e){return{id:e.id,name:e.name,species:e.species,foto:e.image,status:e.status,origin:e.origin.name,episode:e.episode}}))}))},j=(c(15),c(1)),m=function(e){return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(n.b,{to:"/",className:"link",children:"Return to main site"}),e.children]})},h=function(e){return Object(j.jsxs)(n.b,{to:"/character/".concat(e.character.id),children:[Object(j.jsx)("img",{src:e.character.foto,alt:"Foto of ".concat(e.character.name),className:"list__item--image"}),Object(j.jsxs)("div",{className:"list__item--container",children:[Object(j.jsx)("h2",{className:"list__item--name",children:e.character.name}),Object(j.jsx)("h3",{className:"list__item--species",children:e.character.species})]})]})},d=function(e){var t=e.characters.map((function(e){return Object(j.jsx)("li",{className:"list__item",children:Object(j.jsx)(h,{character:e})},e.id)}));return Object(j.jsx)(j.Fragment,{children:Object(j.jsx)("ul",{className:"list",children:t})})},u=c.p+"static/media/Rick_and_Morty_-_logo.de13d484.png",b=function(e){return Object(j.jsx)("form",{className:"form",children:Object(j.jsx)("label",{htmlFor:"name",children:Object(j.jsx)("input",{type:"text",name:"name",id:"name",placeholder:"write a name here...",onKeyUp:function(t){e.handleFilter(t.target.name,t.target.value),console.log(t.target.name,t.target.value)},className:"form__input"})})})};var O=function(){var e=Object(a.useState)([]),t=Object(i.a)(e,2),c=t[0],s=t[1],r=Object(a.useState)(""),n=Object(i.a)(r,2),h=n[0],O=n[1];Object(a.useEffect)((function(){o().then((function(e){return s(e)}))}),[]);var x=c.filter((function(e){return e.name.toLowerCase().includes(h.toLowerCase())}));return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("header",{className:"header",children:Object(j.jsx)("img",{src:u,alt:"logo Rick and Morty",className:"header__image"})}),Object(j.jsx)("main",{className:"main",children:Object(j.jsxs)(l.c,{children:[Object(j.jsxs)(l.a,{exact:!0,path:"/",children:[Object(j.jsx)(b,{handleFilter:function(e,t){"name"===e&&O(t)},name:h}),Object(j.jsx)(d,{characters:x})]}),Object(j.jsx)(l.a,{path:"/character/:id",render:function(e){var t=parseInt(e.match.params.id),a=c.find((function(e){return e.id===t}));if(a)return Object(j.jsx)(m,{children:Object(j.jsxs)("div",{className:"characterDetail",children:[Object(j.jsx)("img",{src:a.foto,alt:"Foto of ".concat(a.name),className:"characterDetail__image"}),Object(j.jsxs)("div",{className:"characterDetail__container",children:[Object(j.jsx)("h2",{className:"characterDetail__name",children:a.name}),Object(j.jsxs)("h3",{className:"characterDetail__species",children:["Status: ",a.status]}),Object(j.jsxs)("h3",{className:"characterDetail__species",children:["Species: ",a.species]}),Object(j.jsxs)("h3",{className:"characterDetail__species",children:["Origin: ",a.origin]}),Object(j.jsxs)("h3",{className:"characterDetail__species",children:["Episodes: ",a.episode.length]})]})]})})}})]})}),Object(j.jsx)("footer",{className:"footer",children:Object(j.jsx)("small",{className:"footer__text",children:"Rick and Morty"})})]})};r.a.render(Object(j.jsx)(n.a,{children:Object(j.jsx)(O,{})}),document.getElementById("root"))}},[[29,1,2]]]);
//# sourceMappingURL=main.e3075f85.chunk.js.map