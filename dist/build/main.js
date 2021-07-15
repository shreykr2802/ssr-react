(()=>{var e={5286:(e,t,n)=>{"use strict";var s=n(7294),r=n(3935),a=n(3727),l=n(5977),o=n(3038),i=n.n(o);const j=function(){var e=(0,s.useState)(""),t=i()(e,2),n=t[0],r=t[1],a=(0,l.k6)();return s.createElement("div",{className:"SearchContainer"},s.createElement("label",null,"Search Movie"),s.createElement("input",{type:"text",onChange:function(e){return r(e.target.value)},value:n}),s.createElement("button",{onClick:function(){a.push("/".concat(n))}},"Search"))};var u=n(381),c=n.n(u);const m=function(){var e,t,n,r=(0,l.UO)().id,a=(0,s.useState)(),o=i()(a,2),j=o[0],u=o[1],m=(0,s.useState)(!0),d=i()(m,2),h=d[0],v=d[1];return(0,s.useEffect)((function(){fetch("https://api.tvmaze.com/shows/".concat(r)).then((function(e){return e.json()})).then((function(e){u(e),v(!1)}))}),[]),s.createElement("div",{className:"MovieDetails"},h?"Loading.....":s.createElement(s.Fragment,null,s.createElement("h5",null,null==j?void 0:j.name),s.createElement("img",{src:null==j||null===(e=j.image)||void 0===e?void 0:e.medium,alt:null==j?void 0:j.name}),s.createElement("p",null,null==j?void 0:j.language),s.createElement("div",{style:{display:"flex",flexFlow:"row",alignItems:"center",justifyContent:"space-around",width:"100%"}},null==j?void 0:j.genres.map((function(e){return s.createElement("p",{key:e},e)}))),s.createElement("p",null,"Runtime: ",null==j?void 0:j.runtime),s.createElement("p",null,"Premiered: ",c()(null==j?void 0:j.premiered).format("DD MMM, YYYY")),s.createElement("p",null,"Rating: ",null!=j&&null!==(t=j.rating)&&void 0!==t&&t.average?(null==j||null===(n=j.rating)||void 0===n?void 0:n.average)+"/10":"Not Available")))},d=function(){var e=(0,l.UO)().name,t=(0,s.useState)([]),n=i()(t,2),r=n[0],a=n[1];(0,s.useEffect)((function(){fetch("https://api.tvmaze.com/search/shows?q=".concat(e)).then((function(e){return e.json()})).then((function(e){return a(e)}))}),[e]);var o=(0,l.k6)();return s.createElement("div",{className:"MovieList"},r.map((function(e){var t,n,r,a;return s.createElement("div",{className:"MoviesCard",onClick:function(){return t=e.show.id,void o.push("/details/".concat(t));var t},key:e.show.id},s.createElement("h5",null,e.show.name),s.createElement("img",{src:null===(t=e.show)||void 0===t||null===(n=t.image)||void 0===n?void 0:n.medium,alt:e.show.name,className:"MoviePoster"}),s.createElement("p",null,e.show.language),s.createElement("div",{style:{display:"flex",flexFlow:"row",alignItems:"center",justifyContent:"space-around",width:"100%"}},e.show.genres.map((function(e){return s.createElement("p",{key:e},e)}))),s.createElement("p",null,"Runtime: ",e.show.runtime),s.createElement("p",null,"Premiered: ",c()(e.show.premiered).format("DD MMM, YYYY")),s.createElement("p",null,"Rating: ",null!==(r=e.show.rating)&&void 0!==r&&r.average?(null===(a=e.show.rating)||void 0===a?void 0:a.average)+"/10":"Not Available"))})))},h=function(){return s.createElement("div",null,s.createElement(l.rs,null,s.createElement(l.AW,{path:"/:name",exact:!0,component:d}),s.createElement(l.AW,{path:"/details/:id",exact:!0,component:m})))},v=function(){return s.createElement("div",null,s.createElement(j,null),s.createElement(h,null))};r.hydrate(s.createElement(a.VK,null,s.createElement(v,null)),document.getElementById("root"))},6700:(e,t,n)=>{var s={"./af":2786,"./af.js":2786,"./ar":867,"./ar-dz":4130,"./ar-dz.js":4130,"./ar-kw":6135,"./ar-kw.js":6135,"./ar-ly":6440,"./ar-ly.js":6440,"./ar-ma":7702,"./ar-ma.js":7702,"./ar-sa":6040,"./ar-sa.js":6040,"./ar-tn":7100,"./ar-tn.js":7100,"./ar.js":867,"./az":1083,"./az.js":1083,"./be":9808,"./be.js":9808,"./bg":8338,"./bg.js":8338,"./bm":7438,"./bm.js":7438,"./bn":8905,"./bn-bd":6225,"./bn-bd.js":6225,"./bn.js":8905,"./bo":1560,"./bo.js":1560,"./br":1278,"./br.js":1278,"./bs":622,"./bs.js":622,"./ca":2468,"./ca.js":2468,"./cs":5822,"./cs.js":5822,"./cv":877,"./cv.js":877,"./cy":7373,"./cy.js":7373,"./da":4780,"./da.js":4780,"./de":9740,"./de-at":217,"./de-at.js":217,"./de-ch":894,"./de-ch.js":894,"./de.js":9740,"./dv":5300,"./dv.js":5300,"./el":837,"./el.js":837,"./en-au":8348,"./en-au.js":8348,"./en-ca":7925,"./en-ca.js":7925,"./en-gb":2243,"./en-gb.js":2243,"./en-ie":6436,"./en-ie.js":6436,"./en-il":7207,"./en-il.js":7207,"./en-in":4175,"./en-in.js":4175,"./en-nz":6319,"./en-nz.js":6319,"./en-sg":1662,"./en-sg.js":1662,"./eo":2915,"./eo.js":2915,"./es":5655,"./es-do":5251,"./es-do.js":5251,"./es-mx":6112,"./es-mx.js":6112,"./es-us":1146,"./es-us.js":1146,"./es.js":5655,"./et":5603,"./et.js":5603,"./eu":7763,"./eu.js":7763,"./fa":6959,"./fa.js":6959,"./fi":1897,"./fi.js":1897,"./fil":2549,"./fil.js":2549,"./fo":4694,"./fo.js":4694,"./fr":4470,"./fr-ca":3049,"./fr-ca.js":3049,"./fr-ch":2330,"./fr-ch.js":2330,"./fr.js":4470,"./fy":5044,"./fy.js":5044,"./ga":9295,"./ga.js":9295,"./gd":2101,"./gd.js":2101,"./gl":8794,"./gl.js":8794,"./gom-deva":7884,"./gom-deva.js":7884,"./gom-latn":3168,"./gom-latn.js":3168,"./gu":5349,"./gu.js":5349,"./he":4206,"./he.js":4206,"./hi":94,"./hi.js":94,"./hr":316,"./hr.js":316,"./hu":2138,"./hu.js":2138,"./hy-am":1423,"./hy-am.js":1423,"./id":9218,"./id.js":9218,"./is":135,"./is.js":135,"./it":626,"./it-ch":150,"./it-ch.js":150,"./it.js":626,"./ja":9183,"./ja.js":9183,"./jv":4286,"./jv.js":4286,"./ka":2105,"./ka.js":2105,"./kk":7772,"./kk.js":7772,"./km":8758,"./km.js":8758,"./kn":9282,"./kn.js":9282,"./ko":3730,"./ko.js":3730,"./ku":1408,"./ku.js":1408,"./ky":3291,"./ky.js":3291,"./lb":6841,"./lb.js":6841,"./lo":5466,"./lo.js":5466,"./lt":7010,"./lt.js":7010,"./lv":7595,"./lv.js":7595,"./me":9861,"./me.js":9861,"./mi":5493,"./mi.js":5493,"./mk":5966,"./mk.js":5966,"./ml":7341,"./ml.js":7341,"./mn":5115,"./mn.js":5115,"./mr":370,"./mr.js":370,"./ms":9847,"./ms-my":1237,"./ms-my.js":1237,"./ms.js":9847,"./mt":2126,"./mt.js":2126,"./my":6165,"./my.js":6165,"./nb":4924,"./nb.js":4924,"./ne":6744,"./ne.js":6744,"./nl":3901,"./nl-be":9814,"./nl-be.js":9814,"./nl.js":3901,"./nn":3877,"./nn.js":3877,"./oc-lnc":2135,"./oc-lnc.js":2135,"./pa-in":5858,"./pa-in.js":5858,"./pl":4495,"./pl.js":4495,"./pt":9520,"./pt-br":7971,"./pt-br.js":7971,"./pt.js":9520,"./ro":6459,"./ro.js":6459,"./ru":1793,"./ru.js":1793,"./sd":950,"./sd.js":950,"./se":490,"./se.js":490,"./si":124,"./si.js":124,"./sk":4249,"./sk.js":4249,"./sl":4985,"./sl.js":4985,"./sq":1104,"./sq.js":1104,"./sr":9131,"./sr-cyrl":9915,"./sr-cyrl.js":9915,"./sr.js":9131,"./ss":5893,"./ss.js":5893,"./sv":8760,"./sv.js":8760,"./sw":1172,"./sw.js":1172,"./ta":7333,"./ta.js":7333,"./te":3110,"./te.js":3110,"./tet":2095,"./tet.js":2095,"./tg":7321,"./tg.js":7321,"./th":9041,"./th.js":9041,"./tk":9005,"./tk.js":9005,"./tl-ph":5768,"./tl-ph.js":5768,"./tlh":9444,"./tlh.js":9444,"./tr":2397,"./tr.js":2397,"./tzl":8254,"./tzl.js":8254,"./tzm":1106,"./tzm-latn":699,"./tzm-latn.js":699,"./tzm.js":1106,"./ug-cn":9288,"./ug-cn.js":9288,"./uk":7691,"./uk.js":7691,"./ur":3795,"./ur.js":3795,"./uz":6791,"./uz-latn":588,"./uz-latn.js":588,"./uz.js":6791,"./vi":5666,"./vi.js":5666,"./x-pseudo":4378,"./x-pseudo.js":4378,"./yo":5805,"./yo.js":5805,"./zh-cn":3839,"./zh-cn.js":3839,"./zh-hk":5726,"./zh-hk.js":5726,"./zh-mo":9807,"./zh-mo.js":9807,"./zh-tw":4152,"./zh-tw.js":4152};function r(e){var t=a(e);return n(t)}function a(e){if(!n.o(s,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return s[e]}r.keys=function(){return Object.keys(s)},r.resolve=a,e.exports=r,r.id=6700}},t={};function n(s){if(t[s])return t[s].exports;var r=t[s]={id:s,loaded:!1,exports:{}};return e[s].call(r.exports,r,r.exports,n),r.loaded=!0,r.exports}n.m=e,n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var s in t)n.o(t,s)&&!n.o(e,s)&&Object.defineProperty(e,s,{enumerable:!0,get:t[s]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.nmd=e=>(e.paths=[],e.children||(e.children=[]),e),(()=>{var e={179:0},t=[[5286,736]],s=()=>{};function r(){for(var s,r=0;r<t.length;r++){for(var a=t[r],l=!0,o=1;o<a.length;o++){var i=a[o];0!==e[i]&&(l=!1)}l&&(t.splice(r--,1),s=n(n.s=a[0]))}return 0===t.length&&(n.x(),n.x=()=>{}),s}n.x=()=>{n.x=()=>{},l=l.slice();for(var e=0;e<l.length;e++)a(l[e]);return(s=r)()};var a=r=>{for(var a,l,[i,j,u,c]=r,m=0,d=[];m<i.length;m++)l=i[m],n.o(e,l)&&e[l]&&d.push(e[l][0]),e[l]=0;for(a in j)n.o(j,a)&&(n.m[a]=j[a]);for(u&&u(n),o(r);d.length;)d.shift()();return c&&t.push.apply(t,c),s()},l=self.webpackChunkreact_ssr=self.webpackChunkreact_ssr||[],o=l.push.bind(l);l.push=a})(),n.x()})();
//# sourceMappingURL=main.js.map