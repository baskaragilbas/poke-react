(this["webpackJsonppoke-react"]=this["webpackJsonppoke-react"]||[]).push([[0],{14:function(e,t,s){e.exports={pokemonType:"PokemonDetail_pokemonType__1NnrX",bug:"PokemonDetail_bug__1CLnM PokemonDetail_pokemonType__1NnrX",dark:"PokemonDetail_dark__3BnVw PokemonDetail_pokemonType__1NnrX",dragon:"PokemonDetail_dragon__2gL9h PokemonDetail_pokemonType__1NnrX",electric:"PokemonDetail_electric__1wgnF PokemonDetail_pokemonType__1NnrX",fairy:"PokemonDetail_fairy__1uFne PokemonDetail_pokemonType__1NnrX",fighting:"PokemonDetail_fighting__2JH9U PokemonDetail_pokemonType__1NnrX",fire:"PokemonDetail_fire__1QREM PokemonDetail_pokemonType__1NnrX",flying:"PokemonDetail_flying__3P1HK PokemonDetail_pokemonType__1NnrX",ghost:"PokemonDetail_ghost__3G1n1 PokemonDetail_pokemonType__1NnrX",grass:"PokemonDetail_grass__2ihMG PokemonDetail_pokemonType__1NnrX",ground:"PokemonDetail_ground__3I1mm PokemonDetail_pokemonType__1NnrX",ice:"PokemonDetail_ice__2l8ko PokemonDetail_pokemonType__1NnrX",normal:"PokemonDetail_normal__2Fi7n PokemonDetail_pokemonType__1NnrX",poison:"PokemonDetail_poison__1PWDI PokemonDetail_pokemonType__1NnrX",psychic:"PokemonDetail_psychic__2LdhM PokemonDetail_pokemonType__1NnrX",rock:"PokemonDetail_rock__2TZQM PokemonDetail_pokemonType__1NnrX",steel:"PokemonDetail_steel__dL18A PokemonDetail_pokemonType__1NnrX",water:"PokemonDetail_water__X6uKu PokemonDetail_pokemonType__1NnrX",width:"PokemonDetail_width__3G8G6",tableFit:"PokemonDetail_tableFit__2yDwY"}},29:function(e,t,s){e.exports={PokemonCard:"PokemonCard_PokemonCard__24R03",NoStyle:"PokemonCard_NoStyle__2Mdta",NoLink:"PokemonCard_NoLink__1qusg"}},40:function(e,t,s){},43:function(e,t,s){},52:function(e,t,s){"use strict";s.r(t);var n=s(2),c=s(3),a=s.n(c),r=s(32),i=s.n(r),l=(s(40),s(41),s(18)),o=s.n(l),d=s(22),j=s(9),b=(s(43),s(15)),p=s(7);var h=function(){return Object(n.jsx)(b.a,{children:Object(n.jsx)("div",{children:Object(n.jsxs)("nav",{class:"navbar navbar-dark bg-dark",children:[Object(n.jsx)(b.b,{as:"Link",class:"navbar-brand",to:"/",children:"Pokemon"}),Object(n.jsx)(b.b,{as:"Link",class:"navbar-brand",to:"/pokebox",children:"Pokebox"})]})})})},u=s(29),m=s.n(u);var x=function(e){var t=e.name,s=e.url,c=e.pokeID,r=e.cardLink,i=a.a.useState(!0),l=Object(j.a)(i,2),o=l[0],d=l[1];return Object(n.jsx)(b.b,{class:r?m.a.NoStyle:m.a.NoLink,to:"../pokemon/"+c,children:Object(n.jsxs)("div",{class:"card",children:[Object(n.jsxs)("div",{class:"card-header text-left",children:["ID : ",c]}),o?Object(n.jsx)("div",{class:"text-center",children:Object(n.jsx)("div",{class:"spinner-border",role:"status",children:Object(n.jsx)("span",{class:"sr-only",children:"Loading..."})})}):"",Object(n.jsx)("img",{class:"card-img-top bg-secondary",src:s,alt:"Pokemon Sprite",onLoad:function(){d(!1)}}),Object(n.jsx)("div",{class:"card-body",children:Object(n.jsx)("h5",{class:"card-title",children:t})})]})})};var O=function(e){var t=e.data;if(t)return Object(n.jsx)("div",{class:"card-group",children:t.map((function(e){var t=e.url.split("/").slice(-2).reverse().pop(),s="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/"+t+".png",c=e.name.charAt(0).toUpperCase()+e.name.slice(1);return Object(n.jsx)("div",{class:"col-md-3 col-sm-6 mb-5",children:Object(n.jsx)(x,{pokeID:t,url:s,name:c,cardLink:!0})})}))})};var f=function(e){var t=e.searchFilter;return Object(n.jsx)("div",{class:"d-flex justify-content-center align-items-center container",children:Object(n.jsx)("div",{class:"row mb-4 mt-4",children:Object(n.jsx)("form",{class:"form-inline",children:Object(n.jsx)("div",{class:"row justify-content-center",children:Object(n.jsx)("input",{class:"form-control mr-sm-2",type:"search",placeholder:"Search","aria-label":"Search",onChange:function(e){t(e.target.value)}})})})})})};var _=function(e){var t=e.data,s=e.total,c=a.a.useState(20),r=Object(j.a)(c,2),i=r[0],l=(r[1],a.a.useState(Math.ceil(s/i))),o=Object(j.a)(l,2),d=o[0],b=o[1],p=a.a.useState(1),h=Object(j.a)(p,2),u=h[0],m=h[1],x=a.a.useState([]),_=Object(j.a)(x,2),k=_[0],g=_[1],v=a.a.useState(t),P=Object(j.a)(v,2),y=P[0],D=P[1],w=a.a.useState([]),S=Object(j.a)(w,2),N=S[0],T=S[1];return console.log(k),a.a.useEffect((function(){b(Math.ceil(s/i))}),[s,i]),a.a.useEffect((function(){D(t)}),[t]),a.a.useEffect((function(){var e=(u-1)*i,t=u*i;T(t>s?y.slice(s-t):y.slice(e,t));var n=[];if(d<=5)for(var c=1;c<=d;c++)n.push(c);else if(u<=3){for(var a=1;a<=u+2;a++)n.push(a);n.push("..."),n.push(d)}else if(u>=d-3){n.push(1),n.push("...");for(var r=u-2;r<=d;r++)n.push(r)}else{n.push(1),n.push("...");for(var l=u-2;l<=u+2;l++)n.push(l);n.push("..."),n.push(d)}g(n),window.scrollTo(0,0)}),[u,d,y,s,i,t]),Object(n.jsxs)("div",{children:[Object(n.jsx)(f,{searchFilter:function(e){if(e.length>0){var n=t.filter((function(t){return t.name.toLowerCase().includes(e.toLowerCase())}));D(n),m(1),b(Math.ceil(n.length/i))}else D(t),m(1),b(Math.ceil(s/i))}}),Object(n.jsx)(O,{data:N}),Object(n.jsxs)("ul",{class:"pagination justify-content-center",children:[1!==u&&Object(n.jsx)("li",{class:"page-item",children:Object(n.jsx)("span",{class:"page-link",onClick:function(){return m(u-1)},children:"Previous"})}),k.map((function(e){return Object(n.jsx)("li",{class:"page-item ".concat(e===u?"active":""),children:Object(n.jsx)("span",{class:"page-link",onClick:function(){if(!isNaN(e))return m(e)},children:e})})})),u!==d&&Object(n.jsx)("li",{class:"page-item",children:Object(n.jsx)("span",{class:"page-link",onClick:function(){return m(u+1)},children:"Next"})})]})]})},k=s(34),g=s(14),v=s.n(g),P=s(24);P.a.initializeApp({apiKey:"AIzaSyCsfSkxfxJsJ2mY2tWPshZXxbMSQxjDXrc",authDomain:"poke-react-968d2.firebaseapp.com",databaseURL:"https://poke-react-968d2.firebaseio.com",projectId:"poke-react-968d2",storageBucket:"poke-react-968d2.appspot.com",messagingSenderId:"105179896175",appId:"1:105179896175:web:ac9b42aa3705382e0cb09a",measurementId:"G-94S6NB320F"}),P.a.analytics();var y=P.a;var D=function(){var e=y.database(),t=a.a.useState(null),s=Object(j.a)(t,2),c=s[0],r=s[1],i=a.a.useState(null),l=Object(j.a)(i,2),b=l[0],h=l[1],u=Object(p.f)().id,m="https://pokeapi.co/api/v2/pokemon/";function O(e){return e.charAt(0).toUpperCase()+e.slice(1)}function f(e){var t=e.split("-");return t.map((function(e,s){return t[s]=O(e)})),t.join(" ")}if(e.ref("pokemon_collections").once("value",(function(e){e.hasChild(u)?h(!0):h(!1)})),a.a.useEffect((function(){var e=m+u;(function(){var e=Object(d.a)(o.a.mark((function e(t){var s,n,c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t).then((function(e){return e.ok?e:Promise.reject(s)})).catch((function(e){console.warn("API '"+t+"' "+e+" .")}));case 2:return s=e.sent,e.next=5,s.json();case 5:return n=e.sent,e.next=8,fetch(n.species.url).then((function(e){return e.ok?e:Promise.reject(c)})).catch((function(e){console.warn("API '"+n.species.url+"' "+e+" .")}));case 8:return c=e.sent,e.next=11,c.json();case 11:n.species.detail=e.sent,n.species.detail.flavor_text_entries.some((function(e){"en"===e.language.name&&(n.species.description=e.flavor_text.replace(/\s\\.|\\.\s/g," ").replace(/\\./g,"s"))})),r(n);case 14:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}})()(e)}),[]),!c)return Object(n.jsx)("div",{children:"Loading..."});var _={hp:c.stats.filter((function(e){return"hp"===e.stat.name}))[0].base_stat,attack:c.stats.filter((function(e){return"attack"===e.stat.name}))[0].base_stat,defense:c.stats.filter((function(e){return"defense"===e.stat.name}))[0].base_stat,special_attack:c.stats.filter((function(e){return"special-attack"===e.stat.name}))[0].base_stat,spesial_defense:c.stats.filter((function(e){return"special-defense"===e.stat.name}))[0].base_stat,speed:c.stats.filter((function(e){return"speed"===e.stat.name}))[0].base_stat};return Object(n.jsx)("div",{class:"card mt-4 mb-5",children:Object(n.jsxs)("div",{class:"card-group mt-4",children:[Object(n.jsxs)("div",{class:"col-md-3",children:[Object(n.jsx)(x,{pokeID:u,url:c.sprites.front_default,name:O(c.name),cardLink:!1}),null===b?Object(n.jsxs)("div",{class:"mt-2 mb-2 align-middle",children:[Object(n.jsx)("button",{type:"button",class:"btn btn-block btn-success",children:Object(n.jsx)("div",{class:"spinner-border",role:"status",children:Object(n.jsx)("span",{class:"sr-only",children:"Loading..."})})}),Object(n.jsx)("button",{type:"button",class:"mt-2 btn btn-block btn-danger",children:Object(n.jsx)("div",{class:"spinner-border",role:"status",children:Object(n.jsx)("span",{class:"sr-only",children:"Loading..."})})})]}):Object(n.jsxs)("div",{class:"mt-2 mb-2 align-middle",children:[Object(n.jsx)("button",{type:"button",class:"btn btn-block btn-success",onClick:function(){return function(t){b||e.ref("pokemon_collections").child(t.id).set(t),h(!b)}({id:u,url:m+u+"/",name:c.name})},disabled:b,children:b?"Already owned":"Catch?"}),Object(n.jsx)("button",{type:"button",class:"mt-2  btn btn-block btn-danger",onClick:function(){return function(t){b&&e.ref("pokemon_collections").child(t).remove(),h(!b)}(u)},disabled:!b,children:b?"Release?":"You have to catch it first!"})]})]}),Object(n.jsx)("div",{class:"col-md-9 text-left table-responsive",children:Object(n.jsxs)("table",{class:"table  ",children:[Object(n.jsx)("thead",{children:Object(n.jsx)("tr",{children:Object(n.jsx)("th",{scope:"col",colSpan:"2",children:"Pokemon Data"})})}),Object(n.jsxs)("tbody",{children:[Object(n.jsxs)("tr",{children:[Object(n.jsx)("th",{scope:"row",class:"align-middle",children:"Type"}),Object(n.jsx)("td",{class:"align-middle",children:Object(n.jsx)("div",{class:"container",children:c.types.map((function(e){return Object(n.jsx)("span",{class:"badges badge-pill mr-1 "+v.a[e.type.name],children:O(e.type.name)})}))})})]}),Object(n.jsxs)("tr",{children:[Object(n.jsx)("th",{scope:"row",class:"align-middle",children:"Species"}),Object(n.jsxs)("td",{class:v.a.width,children:[Object(n.jsx)("tr",{children:Object(n.jsx)("strong",{children:Object(n.jsx)("u",{children:O(c.species.name)})})}),Object(n.jsx)("tr",{children:c.species.description})]})]}),Object(n.jsxs)("tr",{children:[Object(n.jsx)("th",{scope:"row",class:"align-middle",children:"Abilities"}),Object(n.jsx)("td",{class:"align-middle",children:Object(n.jsx)("ul",{children:c.abilities.map((function(e){return Object(n.jsxs)("li",{children:[" ",f(e.ability.name)," "]})}))})})]}),Object(n.jsxs)("tr",{children:[Object(n.jsx)("th",{scope:"row",class:"align-middle",children:"Games"}),Object(n.jsx)("td",{children:c.game_indices.map((function(e,t){return Object(n.jsxs)("span",{children:[f(e.version.name),t!==c.game_indices.length-1?",":""," "]})}))})]})]})]})}),Object(n.jsx)("div",{class:"col-md-4 text-left table-responsive",children:Object(n.jsxs)("table",{class:"table ",children:[Object(n.jsx)("thead",{children:Object(n.jsx)("tr",{children:Object(n.jsx)("th",{scope:"col",class:"col-auto",colSpan:"2",children:"Pokemon Stats"})})}),Object(n.jsxs)("tbody",{children:[Object(n.jsxs)("tr",{children:[Object(n.jsx)("th",{scope:"row",class:"align-middle",children:"HP"}),Object(n.jsx)("td",{class:"align-middle",children:Object(n.jsx)("div",{class:"progress",children:Object(n.jsx)("div",{class:"progress-bar",role:"progressbar",style:{width:_.hp+"%"},children:Object(n.jsx)("small",{children:_.hp})})})})]}),Object(n.jsxs)("tr",{children:[Object(n.jsx)("th",{scope:"row",class:"align-middle "+v.a.tableFit,children:"Attack"}),Object(n.jsx)("td",{class:"align-middle",children:Object(n.jsx)("div",{class:"progress",children:Object(n.jsx)("div",{class:"progress-bar",role:"progressbar",style:{width:_.attack+"%"},children:Object(n.jsx)("small",{children:_.attack})})})})]}),Object(n.jsxs)("tr",{children:[Object(n.jsx)("th",{scope:"row",class:"align-middle "+v.a.tableFit,children:"Defense"}),Object(n.jsx)("td",{class:"align-middle",children:Object(n.jsx)("div",{class:"progress",children:Object(n.jsx)("div",{class:"progress-bar",role:"progressbar",style:{width:_.defense+"%"},children:Object(n.jsx)("small",{children:_.defense})})})})]}),Object(n.jsxs)("tr",{children:[Object(n.jsx)("th",{scope:"row",class:"align-middle "+v.a.tableFit,children:"Special Attack"}),Object(n.jsx)("td",{class:"align-middle",children:Object(n.jsx)("div",{class:"progress",children:Object(n.jsx)("div",{class:"progress-bar",role:"progressbar",style:{width:_.special_attack+"%"},children:Object(n.jsx)("small",{children:_.special_attack})})})})]}),Object(n.jsxs)("tr",{children:[Object(n.jsx)("th",{scope:"row",class:"align-middle "+v.a.tableFit,children:"Special Defense"}),Object(n.jsx)("td",{class:"align-middle",children:Object(n.jsx)("div",{class:"progress",children:Object(n.jsx)("div",{class:"progress-bar",role:"progressbar",style:{width:_.spesial_defense+"%"},children:Object(n.jsx)("small",{children:_.spesial_defense})})})})]}),Object(n.jsxs)("tr",{children:[Object(n.jsx)("th",{scope:"row",class:"align-middle "+v.a.tableFit,children:"Speed"}),Object(n.jsx)("td",{class:"align-middle",children:Object(n.jsx)("div",{class:"progress",children:Object(n.jsx)("div",{class:"progress-bar",role:"progressbar",style:{width:_.speed+"%"},children:Object(n.jsx)("small",{children:_.speed})})})})]}),Object(n.jsxs)("tr",{children:[Object(n.jsx)("th",{scope:"row",class:"align-middle "+v.a.tableFit,children:"Total"}),Object(n.jsx)("td",{class:"align-middle",children:Object(n.jsx)("div",{children:function(e){var t=0;for(var s in e)t+=e[s];return t}(_)})})]})]})]})}),Object(n.jsx)("div",{class:"col-md-8 text-left",children:Object(n.jsxs)("table",{class:"table  ",children:[Object(n.jsx)("thead",{children:Object(n.jsx)("tr",{children:Object(n.jsx)("th",{scope:"col",colSpan:"2",children:"Pokemon Data"})})}),Object(n.jsxs)("tbody",{children:[Object(n.jsxs)("tr",{children:[Object(n.jsx)("th",{scope:"row",class:"align-middle",children:"Move"}),Object(n.jsx)("td",{class:"align-middle",children:Object(n.jsx)("strong",{children:"Game Groups"})})]}),c.moves.map((function(e){var t=e.version_group_details.map((function(e){return e.version_group.name})),s=Object(k.a)(new Set(t));return Object(n.jsxs)("tr",{children:[Object(n.jsx)("th",{scope:"row",class:"align-middle",children:f(e.move.name)}),Object(n.jsx)("td",{class:v.a.width,children:Object(n.jsx)("tr",{children:s.map((function(e,t){return Object(n.jsxs)("span",{children:[f(e),t!==s.length-1?",":""," "]})}))})})]})}))]})]})})]})})};var w=function(){var e=y.database(),t=a.a.useState([]),s=Object(j.a)(t,2),c=s[0],r=s[1];return a.a.useEffect((function(){e.ref("pokemon_collections").once("value",(function(e){var t=[];e.forEach((function(e){t.push(e.val())})),r(t)}))}),[e]),Object(n.jsx)("div",{children:Object(n.jsx)(_,{data:c,total:c.length})})};var S=function(){var e=a.a.useState(null),t=Object(j.a)(e,2),s=t[0],c=t[1];return a.a.useEffect((function(){(function(){var e=Object(d.a)(o.a.mark((function e(t){var s,n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t).then((function(e){return e.ok?e:Promise.reject(s)})).catch((function(e){console.warn("API '"+t+"' "+e+" .")}));case 2:return s=e.sent,e.next=5,s.json();case 5:n=e.sent,c(n);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}})()("https://pokeapi.co/api/v2/pokemon?limit=1000000&offset=0")}),[]),s?Object(n.jsx)(b.a,{children:Object(n.jsxs)("div",{className:"App",children:[Object(n.jsx)(h,{}),Object(n.jsxs)(p.c,{children:[Object(n.jsx)(p.a,{exact:!0,path:"/",children:Object(n.jsx)(_,{data:s.results,total:s.count})}),Object(n.jsx)(p.a,{path:"/pokemon/:id",component:D}),Object(n.jsx)(p.a,{path:"/pokebox",children:Object(n.jsx)(w,{})})]})]})}):Object(n.jsxs)("div",{children:[Object(n.jsx)(h,{}),Object(n.jsx)("div",{class:"text-center",children:"Loading.."})]})},N=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,53)).then((function(t){var s=t.getCLS,n=t.getFID,c=t.getFCP,a=t.getLCP,r=t.getTTFB;s(e),n(e),c(e),a(e),r(e)}))};i.a.render(Object(n.jsx)(a.a.StrictMode,{children:Object(n.jsx)(S,{})}),document.getElementById("root")),N()}},[[52,1,2]]]);
//# sourceMappingURL=main.f6b1d5a5.chunk.js.map