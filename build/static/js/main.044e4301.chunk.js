(this["webpackJsonpebike-frontend-react"]=this["webpackJsonpebike-frontend-react"]||[]).push([[0],{12:function(e,t,c){},17:function(e,t,c){},19:function(e,t,c){},33:function(e,t,c){},34:function(e,t,c){},35:function(e,t,c){},36:function(e,t,c){"use strict";c.r(t);var a=c(1),s=c.n(a),i=c(14),n=c.n(i),r=(c(12),c(17),c(2)),l=c(0);var j=function(e){var t=e.title;return Object(l.jsx)("div",{children:Object(l.jsx)("h1",{children:t})})},o=c(39),d=c(40),m=c(37),b=c(38);var u=function(){return Object(l.jsx)("div",{children:[{lat:60.192123,lan:24.945831},{lat:60.292123,lan:24.845831},{lat:60.392123,lan:24.745831},{lat:60.492123,lan:24.645831}].map((function(e){return Object(l.jsx)(m.a,{position:[e.lat,e.lan],children:Object(l.jsxs)(b.a,{children:["Lat: ",e.lat,Object(l.jsx)("br",{})," Lan: ",e.lan]})})}))})};var x=function(){return Object(l.jsx)("div",{children:Object(l.jsxs)(o.a,{center:[60.192123,24.945831],zoom:9,scrollWheelZoom:!0,children:[Object(l.jsx)(d.a,{attribution:'\xa9 <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"}),Object(l.jsx)(u,{})]})})},O=c(4),p=c.n(O);var h=function(){return Object(l.jsxs)("div",{className:"wrapper",children:[Object(l.jsx)(p.a,{title:"Hem"}),Object(l.jsx)(j,{title:"Hem"}),Object(l.jsx)(x,{})]})};var _=function(){return Object(l.jsxs)("div",{className:"wrapper",children:[Object(l.jsx)(p.a,{title:"Om"}),"About"]})},v=(c(33),c(3)),g=c.p+"static/media/city__map-test.dbeb735c.png",N=c.p+"static/media/icon__scooter.8f7c4e27.svg",k=c.p+"static/media/icon__charge.cc921c00.svg",y=c.p+"static/media/icon__customer.56e9ea47.svg";var f=function(e){var t=e.name,c=e.desc,a=e.bikes,s=e.charge,i=e.customers;return Object(l.jsx)(v.b,{to:"/cities/"+t.toLowerCase(),state:{cityName:t},children:Object(l.jsxs)("div",{className:"city__outer-wrapper",children:[Object(l.jsx)("div",{className:"city__img-wrapper",children:Object(l.jsx)("img",{src:g,alt:"map"})}),Object(l.jsxs)("div",{className:"city__content-wrapper",children:[Object(l.jsx)("h3",{children:t}),Object(l.jsx)("p",{children:c}),Object(l.jsxs)("div",{className:"city__bottom-wrapper",children:[Object(l.jsxs)("div",{className:"city__stats-wrapper",children:[Object(l.jsxs)("div",{className:"city__stats-item",children:[Object(l.jsx)("img",{src:N,className:"city__icon",alt:"Scooter icon"}),a]}),Object(l.jsxs)("div",{className:"city__stats-item",children:[Object(l.jsx)("img",{src:k,className:"city__icon",alt:"Scooter icon"}),s]}),Object(l.jsxs)("div",{className:"city__stats-item",children:[Object(l.jsx)("img",{src:y,className:"city__icon",alt:"Scooter icon"}),i]})]}),"-",">"]})]})]})})};var S=function(){return Object(l.jsxs)("div",{className:"wrapper",children:[Object(l.jsx)(p.a,{title:"St\xe4der"}),Object(l.jsx)(j,{title:"St\xe4der"}),Object(l.jsx)("div",{className:"city__grid",children:[{name:"Stockholm",desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ullamcorper quam eu",bikes:272,charge:13,customers:42},{name:"Link\xf6ping",desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ullamcorper quam eu",bikes:152,charge:9,customers:21},{name:"Helsingfors",desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ullamcorper quam eu",bikes:92,charge:5,customers:41}].map((function(e){return Object(l.jsx)(f,{name:e.name,desc:e.desc,bikes:e.bikes,charge:e.charge,customers:e.customers})}))})]})};c(19),c(34);var w=function(e){var t=e.id,c=e.city,a=e.lat,s=e.lan,i=e.latest_travel,n=e.parking,r=e.status;return Object(l.jsxs)("div",{className:"table__outer-wrapper",children:[Object(l.jsx)("div",{className:"table__column-item",children:t}),Object(l.jsx)("div",{className:"table__column-item",children:c}),Object(l.jsx)("div",{className:"table__column-item",children:a}),Object(l.jsx)("div",{className:"table__column-item",children:s}),Object(l.jsx)("div",{className:"table__column-item",children:i}),Object(l.jsx)("div",{className:"table__column-item",children:n}),Object(l.jsx)("div",{className:"table__column-item",children:r})]})};var L=function(){return Object(l.jsxs)("div",{className:"wrapper",children:[Object(l.jsx)(p.a,{title:"Cyklar"}),Object(l.jsx)(j,{title:"Cyklar"}),Object(l.jsx)("input",{type:"text",placeholder:"S\xf6k",className:"input__search"}),[{id:123,city:"Stockholm",lat:"12.212313",lan:"52.123123",latest_travel:"12:41 - 11.3.2021",parking:"Inte tillg\xe4nglig",status:"Upptagen"},{id:124,city:"Stockholm",lat:"13.212313",lan:"53.123123",latest_travel:"12:42 - 11.3.2021",parking:"Parkering #2",status:"Ledig"},{id:123,city:"Stockholm",lat:"12.212313",lan:"52.123123",latest_travel:"12:41 - 11.3.2021",parking:"Inte tillg\xe4nglig",status:"Upptagen"},{id:124,city:"Stockholm",lat:"13.212313",lan:"53.123123",latest_travel:"12:42 - 11.3.2021",parking:"Parkering #2",status:"Ledig"}].map((function(e){return Object(l.jsx)(w,{id:e.id,city:e.city,lat:e.lat,lan:e.lan,latest_travel:e.latest_travel,parking:e.parking,status:e.status})}))]})};var P=function(e){var t=e.id,c=e.city;return Object(l.jsxs)("div",{className:"table__outer-wrapper",children:[Object(l.jsx)("div",{className:"table__column-item",children:t}),Object(l.jsx)("div",{className:"table__column-item",children:c})]})};var C=function(){return Object(l.jsxs)("div",{className:"wrapper",children:[Object(l.jsx)(p.a,{title:"Laddstationer"}),Object(l.jsx)(j,{title:"Laddstationer"}),Object(l.jsx)("input",{type:"text",placeholder:"S\xf6k",className:"input__search"}),[{id:123,city:"Stockholm"},{id:124,city:"Stockholm"},{id:123,city:"Stockholm"},{id:124,city:"Stockholm"}].map((function(e){return Object(l.jsx)(P,{id:e.id,city:e.city})}))]})};var H=function(){return Object(l.jsxs)("div",{className:"wrapper",children:[Object(l.jsx)(p.a,{title:"Logga in"}),Object(l.jsx)(j,{title:"Logga in"})]})};var q=function(e){var t=e.url;return Object(l.jsx)(v.b,{to:"/"+t,className:"",children:"Tillbaka"})};var I=function(){var e=Object(r.e)().state.cityName;return Object(l.jsxs)("div",{className:"wrapper",children:[Object(l.jsx)(p.a,{title:e}),Object(l.jsx)(q,{url:"cities"}),Object(l.jsx)(j,{title:e})]})};c(35);var z=function(){return Object(l.jsxs)("div",{className:"nav__outer-wrapper",children:[Object(l.jsx)("div",{className:"nav__brand",children:Object(l.jsx)(v.b,{to:"/",children:"eBike"})}),Object(l.jsxs)("div",{className:"nav__menu",children:[Object(l.jsx)(v.c,{to:"/",className:"nav__link",children:"Hem"}),Object(l.jsx)(v.c,{to:"/cities",className:"nav__link",children:"St\xe4der"}),Object(l.jsx)(v.c,{to:"/bikes",className:"nav__link",children:"Cyklar"}),Object(l.jsx)(v.c,{to:"/charging",className:"nav__link",children:"Laddstationer"}),Object(l.jsx)(v.c,{to:"/login",className:"nav__link nav__btn",children:"Logga in"})]})]})};var A=function(){return Object(l.jsxs)("div",{className:"App",children:[Object(l.jsx)(z,{}),Object(l.jsxs)(r.c,{children:[Object(l.jsx)(r.a,{path:"/",element:Object(l.jsx)(h,{})}),Object(l.jsx)(r.a,{path:"/about",element:Object(l.jsx)(_,{})}),Object(l.jsx)(r.a,{path:"/cities",element:Object(l.jsx)(S,{})}),Object(l.jsx)(r.a,{path:"/cities/:city",element:Object(l.jsx)(I,{})}),Object(l.jsx)(r.a,{path:"/bikes",element:Object(l.jsx)(L,{})}),Object(l.jsx)(r.a,{path:"/charging",element:Object(l.jsx)(C,{})}),Object(l.jsx)(r.a,{path:"/login",element:Object(l.jsx)(H,{})})]})]})};n.a.render(Object(l.jsx)(s.a.StrictMode,{children:Object(l.jsx)(v.a,{children:Object(l.jsx)(A,{})})}),document.getElementById("root"))}},[[36,1,2]]]);
//# sourceMappingURL=main.044e4301.chunk.js.map