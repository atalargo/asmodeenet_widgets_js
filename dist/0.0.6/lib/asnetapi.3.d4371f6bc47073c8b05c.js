webpackJsonp([3,9],{"2hHA":function(t,a,e){var i=e("GJ5T"),r=e("W9uE").document,n=i(r)&&i(r.createElement);t.exports=function(t){return n?r.createElement(t):{}}},"5SPq":function(t,a,e){var i=e("SZ/P");i(i.S,"Number",{EPSILON:Math.pow(2,-52)})},"6Vvq":function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var i=e("uj17"),r=e.n(i),n=e("vdRI"),s=e("wYgs"),l=e("ByyM"),o=e("7Mi/");var c={filters:t=>s.a.http.get(s.a.convert("/v1/avatar/filters/"+t),{cache:o.b}),all:t=>s.a.http.get(s.a.convert("/v1/avatars"+(t?"/"+t:"")),{cache:o.b})},d=e("DPF+"),u=e("NKRj"),f={name:"avatar-builtin-selector",mixins:[d.a,u.a],computed:{displayWidth:function(){return this.config.width?this.config.width:"100%"},displayHeight:function(){return this.config.height?this.config.height:"400px"}},methods:{getBuiltins:function(){var t=this;r.a.all([l.a.all(),c.filters(this.lang)]).then(r.a.spread(function(a,e){t.games=a.data.games,t.filters=e.data.filters,null===t.selectedAvatar||350===t.selectedAvatar.id?t.currentFilter="fivetribes":t.currentFilter=t.config.currentFilter,t.refreshAvatars()})),n.a.getters.baseUser.avatar>0&&(this.selectedAvatar={id:n.a.getters.baseUser.avatar})},refreshAvatars:function(){this.avatars=null;var t=this;c.all(this.currentFilter).then(function(a){t.avatars=a.data.avatars,t.selectedAvatar&&!t.selectedAvatar.name&&(t.selectedAvatar=t.avatars.filter(function(a){return a.id===t.selectedAvatar.id})[0])})},selectAvatar:function(t){this.selectedAvatar=t,this.selectNewAvatar=!0}},mounted:function(){s.a.ifInitialized(this.getBuiltins)},data:function(){return{games:null,filters:null,currentFilter:null,avatars:null,selectedAvatar:null,selectNewAvatar:!1}}},v={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"builtin-avatar-selector",style:{width:t.displayWidth,"min-height":t.displayHeight},attrs:{config:t.config}},[e("h1",[t._v(t._s(t.title))]),t._v(" "),null===t.filters?[e("LoadingComp")]:[e("div",[e("select",{directives:[{name:"model",rawName:"v-model",value:t.currentFilter,expression:"currentFilter"}],staticClass:"form-control bs-select",attrs:{name:"select_filter"},on:{change:[function(a){var e=Array.prototype.filter.call(a.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.currentFilter=a.target.multiple?e:e[0]},function(a){t.refreshAvatars()}]}},t._l(t.orderBy(t.filters,"name"),function(a){return e("option",{key:a.id,domProps:{value:a.id}},[t._v(t._s(a.name))])})),t._v(" "),e("panel",{attrs:{config:{width:("md"===this.$mq?75:"sm"===this.$mq||"xs"===this.$mq?60:"xxs"===this.$mq?100:77)+"%",height:t.displayHeight}}},[e("template",{slot:"body"},[null!==t.avatars?[e("ul",{staticClass:"avatars_list"},t._l(t.avatars,function(a){return e("li",{key:a.id,class:{avatar:!0,active:t.selectedAvatar&&t.selectedAvatar.id===a.id},on:{click:function(e){t.selectAvatar(a)}}},[e("div",{staticClass:"thumb"},[e("img",{attrs:{src:a.img}}),t._v(" "),e("span",[t._v(t._s(a.name))])])])}))]:[e("LoadingComp")]],2)],2),t._v(" "),"builtin"===t.typeOfAvatar()||null!==t.selectedAvatar?e("panel",{class:"panelselector"+("xxs"===this.$mq?" alwaysfoot":""),attrs:{config:{width:("md"===this.$mq?23:"sm"===this.$mq||"xs"===this.$mq?38:"xxs"===this.$mq?92:22)+"%",height:"xxs"===this.$mq?"120px":"100%"}}},[e("template",{slot:"body"},[e("form",{attrs:{action:"/"+t.lang+"/profile/avatar",method:"POST"}},[e("input",{attrs:{type:"hidden",name:"select-builtin",id:"select-builtin",value:"1"}}),t._v(" "),!0===t.selectNewAvatar?e("input",{attrs:{type:"hidden",name:"selectedAvatar"},domProps:{value:t.selectedAvatar.id}}):t._e(),t._v(" "),e("label",{attrs:{for:"selectedAvatar"}},[t._v(t._s(!0===t.selectNewAvatar?t.getTrans("confirm_use_builtin_avatar"):t.getTrans("current_avatar")))]),t._v(" "),e("ul",{staticClass:"selector"},[e("li",{staticClass:"avatar"},[e("div",{staticClass:"thumb"},[null!==t.selectedAvatar&&void 0!==t.selectedAvatar?e("img",{attrs:{src:t.selectedAvatar.img}}):t._e(),t._v(" "),e("span",[t._v(t._s(null!==t.selectedAvatar&&void 0!==t.selectedAvatar?t.selectedAvatar.name:""))])])])]),t._v(" "),e("div",{staticClass:"selector"},[e("button",{staticClass:"btn btn-primary auto",attrs:{disabled:!0!==t.selectNewAvatar}},[t._v(t._s(t.getTrans("update")))])])])])],2):t._e()],1)]],2)},staticRenderFns:[]};var p=e("mUJo")(f,v,!1,function(t){e("HHeF")},"data-v-402f0ac8",null);a.default=p.exports},"7Mi/":function(t,a,e){"use strict";e.d(a,"a",function(){return r}),e.d(a,"b",function(){return n});var i=e("XQ85");const r=new i.a;r.maxAge=6e5;const n=new i.a;n.maxAge=864e5},"87Xr":function(t,a,e){(t.exports=e("Vmy+")(!1)).push([t.i,".avatar-handler[data-v-516ae536] h1{color:#b3b3b3;font-size:36px;font-weight:400;display:block;text-align:center}.avatar-handler[data-v-516ae536] .nav.nav-tabs li a{background:#fff;color:#55387c}.avatar-handler[data-v-516ae536] .nav.nav-tabs li.active a,.avatar-handler[data-v-516ae536] .nav.nav-tabs li:hover a{background:linear-gradient(180deg,#55387c,#2d0235);color:#f2f2f2}.avatar-handler[data-v-516ae536] .form-base{margin:0 auto;max-width:360px;padding:15px}.avatar-handler[data-v-516ae536] .kv-avatar .file-preview{border:1px solid #ddd;border-radius:5px;margin-bottom:5px;padding:5px;width:100%}.avatar-handler[data-v-516ae536] .kv-avatar .file-preview .file-default-preview{background:#fff}",""])},"94et":function(t,a,e){e("5SPq"),t.exports=Math.pow(2,-52)},ByyM:function(t,a,e){"use strict";var i=e("wYgs"),r=e("7Mi/");const n={all:()=>i.a.http.get(i.a.convert("/v1/games"),{cache:r.b}),rankables:()=>i.a.http.get(i.a.convert("/v1/game/rankables"),{cache:r.b}),achievements:t=>i.a.http.get(i.a.convert("/v1/game/"+t+"/achievements?limit=200"),{cache:r.b}),crosspromo:(t,a)=>i.a.http.get(i.a.convert("/v1/game/"+t+"/product/"+a),{cache:r.b})};a.a=n},"DPF+":function(t,a,e){"use strict";var i=e("vdRI"),r=function(t){delete t.target.onerror,t.target.src="https://cdn.daysofwonder.com/images/avatars/avatar-neutral.jpg"},n=function(t){delete t.target.onerror,delete t.target.src},s=function(t){delete t.target.onerror,delete t.target.src},l=function(t){delete t.target.onerror,delete t.target.src};var o=function(){const t=/^({(-?\d+(\.\d+)?\s*(,?\s*(-?\d+(\.\d+)?))*)})\s(.+)$/,a=/^(([[\]])\s*(-Inf|-?\d+(\.\d+)?)\s*,\s*(\+?Inf|-?\d+(\.\d+)?)\s*([[\]]))\s(.+)$/;function e(t){return"-Inf"===t?-1/0:"+Inf"===t||"Inf"===t?1/0:parseFloat(t)}let i=function(i,r){r=r.trim();let n=t.exec(r)||a.exec(r);if(!n)return console.error('"'+r+'" is not a valid interval.'),!1;if(n[3]){let t=e(n[3]),a=e(n[5]);return("["===n[2]?i>=t:i>t)&&("]"===n[7]?i<=a:i<a)}{let t=n[2].split(",");for(let a=0;a<t.length;a++){let e=t[a];if(i===parseInt(e))return!0}}return!1},r=function(t,a){switch("pt_BR"===a&&(a="xbr"),a.length>3&&(a=a.split("_")[0]),a){case"az":case"bo":case"dz":case"id":case"ja":case"jv":case"ka":case"km":case"kn":case"ko":case"ms":case"th":case"tr":case"vi":case"zh":return 0;case"af":case"bn":case"bg":case"ca":case"da":case"de":case"el":case"en":case"eo":case"es":case"et":case"eu":case"fa":case"fi":case"fo":case"fur":case"fy":case"gl":case"gu":case"ha":case"he":case"hu":case"is":case"it":case"ku":case"lb":case"ml":case"mn":case"mr":case"nah":case"nb":case"ne":case"nl":case"nn":case"no":case"oc":case"om":case"or":case"pa":case"pap":case"ps":case"pt":case"so":case"sq":case"sv":case"sw":case"ta":case"te":case"tk":case"ur":case"zu":return 1===t?0:1;case"am":case"bh":case"fil":case"fr":case"gun":case"hi":case"hy":case"ln":case"mg":case"nso":case"xbr":case"ti":case"wa":return 0===t||1===t?0:1;case"be":case"bs":case"hr":case"ru":case"sh":case"sr":case"uk":return 1===t&&t%100!=11?0:t%10>=2&&t%10<=4&&(t%100<10||t%100>=20)?1:2;case"cs":case"sk":return 1===t?0:t>=2&&t<=4?1:2;case"ga":return 1===t?0:2===t?1:2;case"lt":return t%10==1&&t%100!=11?0:t%10>=2&&(t%100<10||t%100>=20)?1:2;case"sl":return t%100==1?0:t%100==2?1:t%100==3||t%100==4?2:3;case"mk":return t%10==1?0:1;case"mt":return 1===t?0:0===t||t%100>1&&t%100<11?1:t%100>10&&t%100<20?2:3;case"lv":return 0===t?0:t%10==1&&t%100!=11?1:2;case"pl":return 1===t?0:t%10>=2&&t%10<=4&&(t%100<12||t%100>14)?1:2;case"cy":return 1===t?0:2===t?1:8===t||11===t?2:3;case"ro":return 1===t?0:0===t||t%100>0&&t%100<20?1:2;case"ar":return 0===t?0:1===t?1:2===t?2:t%100>=3&&t%100<=10?3:t%100>=11&&t%100<=99?4:5;default:return 0}},n=function(t,a){return a&&Object.keys(a).forEach(function(e){t=t.replace(e,a[e])}),t};return{getTrans:function(t,a,e,i){if(void 0!==t[e]){return n(t[e],i)}return""},getTransChoice:function(e,s,l,o,c){if(void 0!==e[o]){let d=function(e,n,s){let l,o=e.split("|"),c={},d=[];o.forEach(function(e){e=e.replace("||","|").trim(),(l=t.exec(e))?c[l[0]]=l:(l=a.exec(e))?c[l[0]]=l:(l=/^\w+:\s*(.*?)$/.exec(e))?d.push(l[1]):d.push(e)});let u=Object.keys(c);for(let t=0;t<u.length;t++){let a=u[t];if(i(n,a))return c[a][c[a].length-1]}let f=r(n,s);return void 0===d[f]?1===o.length&&void 0!==d[0]?d[0]:(console.error('Unable to choose a translation for "'+e+'" with locale "'+s+'" for value "'+n+'". Double check that this translation has the correct plural options (e.g. "There is one apple|There are %%count%% apples").'),""):d[f]}(e[o],l,s);return n(d,c)}return""}}}();const c={keyforge:"https://www.keyforgegame.com/",xwing:"https://squadbuilder.fantasyflightgames.com/"},d={props:["config"],computed:{title(){return this.getTrans(this.$options.name+"_title")},lang(){return this.$moment.locale()!==i.a.getters.globalOptions.lang&&this.$moment.locale(i.a.getters.globalOptions.lang),i.a.getters.globalOptions.lang},gameIconError:()=>n,avatarError:()=>r,achievementError:()=>s,genericImageError:()=>l,isLogged:()=>!i.a.getters.unloggedMode,isIn3rdParty:()=>!!i.a.getters.globalOptions.in_3rd_party,baseHost:()=>i.a.getters.globalOptions.host?i.a.getters.globalOptions.host.replace(/\/$/,""):"",baseISImageHost:()=>"https://ncdn.asmodee.net/is/img/"},methods:{getTrans(t,a){return o.getTrans(this.config.trans,this.lang,t,a)},getTransChoice(t,a,e){return o.getTransChoice(this.config.trans,this.lang,t,a,e)},urlFor(t,a){if(a=a||{},this.config.urls&&this.config.urls[t]){let e=this.config.urls[t];return Object.keys(a).forEach(function(t){e=e.replace(":"+t,a[t])}),/^\/[a-z]{2}\/.*/.exec(e)||(e="/"+this.lang+e),this.baseHost+e}return""},gameUrl(t){return["keyforge","xwing"].includes(t)?c[t]:this.urlFor("game-index",{id:t})},goToGame(t){let a=this.gameUrl(t);return["keyforge","xwing"].includes(t)?window.open(a):this.isIn3rdParty?window.open(a):window.location=a,!1},goToGameRanking(t){let a=this.urlFor("rankings-game",{id:t});this.isIn3rdParty?window.open(a):window.location=a},forceHTTPS:t=>t?t.replace("^http://","https://"):t}};a.a=d},"DVK/":function(t,a){var e={}.hasOwnProperty;t.exports=function(t,a){return e.call(t,a)}},GJ5T:function(t,a){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},HHeF:function(t,a,e){var i=e("yG49");"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);(0,e("pFN4").default)("fb19c12e",i,!0,{})},KktU:function(t,a,e){var i=e("qQMF"),r=e("Te4x");t.exports=e("V5XO")?function(t,a,e){return i.f(t,a,r(1,e))}:function(t,a,e){return t[a]=e,t}},MSG5:function(t,a,e){t.exports={default:e("94et"),__esModule:!0}},MgXD:function(t,a,e){"use strict";var i=e("wYgs");a.a=((t,a,e,r)=>{a=a||1,r=r||{},e.limit=e.limit||10,e.offset=(a-1)*e.limit,r.total&&e.offset>r.total&&(e.offset=r.total);let n={params:e};return r.cache&&(n.cache=r.cache),i.a.http.get(i.a.convert(t),n)})},NKRj:function(t,a,e){"use strict";var i=e("wYgs"),r=e("wZkS");const n={props:["config"],computed:{gravatarUrl(){return this.user?"https://www.gravatar.com/avatar/"+CryptoJS.MD5(this.user.email.trim().toLowerCase()).toString():null},isPending(){return this.config.pending}},methods:{getUserDetails(t){let a=this;r.a.myAccount(t).then(t=>{a.user=t.data.user}).catch(t=>{console.error("An error occured:",t.message)})},typeOfAvatar(){if(this.user){let t="upload";return this.user.avatar.startsWith("https://www.gravatar.com/avatar/")?t="gravatar":this.user.avatar.startsWith("https://uploads.asmodee.net/builtin")&&(t="builtin"),t}return null},currentIs(t){return this.typeOfAvatar()===t}},mounted(){i.a.ifInitialized(this.getUserDetails)},data:()=>({user:null})};a.a=n},OOIt:function(t,a,e){var i=e("S84V");"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);(0,e("pFN4").default)("78452f89",i,!0,{})},S84V:function(t,a,e){(t.exports=e("Vmy+")(!1)).push([t.i,".btn.btn-light.active.disabled[data-v-0afee922],.btn.btn-light.active[data-v-0afee922],.btn.btn-light.active[disabled][data-v-0afee922],.btn.btn-light.focus.disabled[data-v-0afee922],.btn.btn-light.focus[data-v-0afee922],.btn.btn-light.focus[disabled][data-v-0afee922],.btn.btn-light:active.disabled[data-v-0afee922],.btn.btn-light:active[disabled][data-v-0afee922],.btn.btn-light:focus.disabled[data-v-0afee922],.btn.btn-light:focus[disabled][data-v-0afee922],.btn.btn-light:hover.disabled[data-v-0afee922],.btn.btn-light:hover[disabled][data-v-0afee922],.btn.btn-light[data-v-0afee922],.btn.btn-light[data-v-0afee922]:active,.btn.btn-light[data-v-0afee922]:focus,.btn.btn-light[data-v-0afee922]:hover,.btn.btn-primary.active.disabled[data-v-0afee922],.btn.btn-primary.active[data-v-0afee922],.btn.btn-primary.active[disabled][data-v-0afee922],.btn.btn-primary.focus.disabled[data-v-0afee922],.btn.btn-primary.focus[data-v-0afee922],.btn.btn-primary.focus[disabled][data-v-0afee922],.btn.btn-primary:active.disabled[data-v-0afee922],.btn.btn-primary:active[disabled][data-v-0afee922],.btn.btn-primary:focus.disabled[data-v-0afee922],.btn.btn-primary:focus[disabled][data-v-0afee922],.btn.btn-primary:hover.disabled[data-v-0afee922],.btn.btn-primary:hover[disabled][data-v-0afee922],.btn.btn-primary[data-v-0afee922],.btn.btn-primary[data-v-0afee922]:active,.btn.btn-primary[data-v-0afee922]:focus,.btn.btn-primary[data-v-0afee922]:hover,.btn.fileinput-upload-button.active.disabled[data-v-0afee922],.btn.fileinput-upload-button.active[data-v-0afee922],.btn.fileinput-upload-button.active[disabled][data-v-0afee922],.btn.fileinput-upload-button.focus.disabled[data-v-0afee922],.btn.fileinput-upload-button.focus[data-v-0afee922],.btn.fileinput-upload-button.focus[disabled][data-v-0afee922],.btn.fileinput-upload-button:active.disabled[data-v-0afee922],.btn.fileinput-upload-button:active[disabled][data-v-0afee922],.btn.fileinput-upload-button:focus.disabled[data-v-0afee922],.btn.fileinput-upload-button:focus[disabled][data-v-0afee922],.btn.fileinput-upload-button:hover.disabled[data-v-0afee922],.btn.fileinput-upload-button:hover[disabled][data-v-0afee922],.btn.fileinput-upload-button[data-v-0afee922],.btn.fileinput-upload-button[data-v-0afee922]:active,.btn.fileinput-upload-button[data-v-0afee922]:focus,.btn.fileinput-upload-button[data-v-0afee922]:hover{background-color:#55387c}.btn[data-v-0afee922]:not(.dropdown-toggle){border:0;text-decoration:none}.nav li a.active.disabled[data-v-0afee922],.nav li a.active[data-v-0afee922],.nav li a.active[disabled][data-v-0afee922],.nav li a.focus.disabled[data-v-0afee922],.nav li a.focus[data-v-0afee922],.nav li a.focus[disabled][data-v-0afee922],.nav li a:active.disabled[data-v-0afee922],.nav li a:active[disabled][data-v-0afee922],.nav li a:focus.disabled[data-v-0afee922],.nav li a:focus[disabled][data-v-0afee922],.nav li a:hover.disabled[data-v-0afee922],.nav li a:hover[disabled][data-v-0afee922],.nav li a[data-v-0afee922],.nav li a[data-v-0afee922]:active,.nav li a[data-v-0afee922]:focus,.nav li a[data-v-0afee922]:hover{background-color:#55387c}.btn-file[data-v-0afee922]{overflow:hidden;position:relative}.avatar-file-upload[data-v-0afee922] .btn-file input[type=file]{position:absolute;top:0;right:0;min-width:100%;min-height:100%;text-align:right;opacity:0;background:none;cursor:inherit;display:block}.avatar-file-upload[data-v-0afee922] .file-loading{width:25px;height:25px;font-size:999px;color:#fff;border:none}.avatar-file-upload[data-v-0afee922] .kv-avatar .file-input{display:table-cell;max-width:300px}.avatar-file-upload[data-v-0afee922] .krajee-default .file-preview-image{image-orientation:from-image;vertical-align:middle}.avatar-file-upload[data-v-0afee922] .file-preview{background-color:#fff}",""])},SAmk:function(t,a,e){t.exports=!e("V5XO")&&!e("gHxa")(function(){return 7!=Object.defineProperty(e("2hHA")("div"),"a",{get:function(){return 7}}).a})},"SZ/P":function(t,a,e){var i=e("W9uE"),r=e("WsAY"),n=e("yhwo"),s=e("KktU"),l=e("DVK/"),o=function(t,a,e){var c,d,u,f=t&o.F,v=t&o.G,p=t&o.S,h=t&o.P,g=t&o.B,b=t&o.W,m=v?r:r[a]||(r[a]={}),y=m.prototype,x=v?i:p?i[a]:(i[a]||{}).prototype;for(c in v&&(e=a),e)(d=!f&&x&&void 0!==x[c])&&l(m,c)||(u=d?x[c]:e[c],m[c]=v&&"function"!=typeof x[c]?e[c]:g&&d?n(u,i):b&&x[c]==u?function(t){var a=function(a,e,i){if(this instanceof t){switch(arguments.length){case 0:return new t;case 1:return new t(a);case 2:return new t(a,e)}return new t(a,e,i)}return t.apply(this,arguments)};return a.prototype=t.prototype,a}(u):h&&"function"==typeof u?n(Function.call,u):u,h&&((m.virtual||(m.virtual={}))[c]=u,t&o.R&&y&&!y[c]&&s(y,c,u)))};o.F=1,o.G=2,o.S=4,o.P=8,o.B=16,o.W=32,o.U=64,o.R=128,t.exports=o},Te4x:function(t,a){t.exports=function(t,a){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:a}}},ToFw:function(t,a,e){var i=e("GJ5T");t.exports=function(t){if(!i(t))throw TypeError(t+" is not an object!");return t}},V5XO:function(t,a,e){t.exports=!e("gHxa")(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},W9uE:function(t,a){var e=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=e)},WsAY:function(t,a){var e=t.exports={version:"2.5.7"};"number"==typeof __e&&(__e=e)},gHxa:function(t,a){t.exports=function(t){try{return!!t()}catch(t){return!0}}},"hb/G":function(t,a,e){(t.exports=e("Vmy+")(!1)).push([t.i,"",""])},nLB7:function(t,a,e){var i=e("87Xr");"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);(0,e("pFN4").default)("5430b873",i,!0,{})},"p0o+":function(t,a){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},qQMF:function(t,a,e){var i=e("ToFw"),r=e("SAmk"),n=e("scWE"),s=Object.defineProperty;a.f=e("V5XO")?Object.defineProperty:function(t,a,e){if(i(t),a=n(a,!0),i(e),r)try{return s(t,a,e)}catch(t){}if("get"in e||"set"in e)throw TypeError("Accessors not supported!");return"value"in e&&(t[a]=e.value),t}},rO86:function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var i=e("6Vvq"),r=e("MSG5"),n=e.n(r),s=e("DPF+"),l=e("NKRj"),o={minFileSize:1,maxFileSize:5e3,minImageWidth:25,minImageHeight:25,maxImageWidth:150,maxImageHeight:150,allowedFileExtensions:["jpg","png","gif"]},c={name:"avatar-file-upload",mixins:[s.a,l.a],computed:{displayWidth:function(){return this.config.width?this.config.width:"100%"},displayHeight:function(){return this.config.height?this.config.height:"400px"},awsInputs:function(){return this.config.awsInputs},acceptFileExtensions:function(){return o.allowedFileExtensions.map(function(t){return"."+t}).join(",")},humanSize:function(){var t=this.file.size;return t>=1048576?Math.round(t/1048576*100+n.a)/100+" MB":t>=1024?Math.round(t/1024*100+n.a)/100+" KB":t>0?Math.round(100*t+n.a)/100+" B":"0 B"},isDisabled:function(){return!(this.imageData&&0===this.fileErrors.length)}},methods:{changeFile:function(){var t=this;if(this.imageData=null,this.fileErrors=[],this.file=this.$refs.file.files[0],this.file){var a=new FileReader;a.onload=function(a){var e=new Image;e.onload=function(){e.width<o.minImageWidth?t.fileErrors.push(t.getTrans("file_size_min_width",{"%name%":t.file.name,"%size%":o.minImageWidth})):e.width>o.maxImageWidth&&t.fileErrors.push(t.getTrans("file_size_max_width",{"%name%":t.file.name,"%size%":o.maxImageWidth})),e.height<o.minImageHeight?t.fileErrors.push(t.getTrans("file_size_min_height",{"%name%":t.file.name,"%size%":o.minImageHeight})):e.height>o.maxImageHeight&&t.fileErrors.push(t.getTrans("file_size_max_height",{"%name%":t.file.name,"%size%":o.maxImageHeight})),t.file.size/1024>o.maxFileSize?t.fileErrors.push(t.getTrans("file_size_too_big",{"%name%":t.file.name,"%size%":Math.round(t.file.size/1024*100+n.a)/100,"%maxSize%":o.maxFileSize})):t.file.size/1024<o.minFileSize&&t.fileErrors.push(t.getTrans("file_size_too_small",{"%name%":t.file.name,"%size%":Math.round(t.file.size/1024*100+n.a)/100,"%minSize%":o.minFileSize})),0===t.fileErrors.length&&(t.$refs["aws-input-content-type"][0].value=t.file.type)},e.src=t.imageData=a.target.result},a.readAsDataURL(this.file)}},removeFile:function(t){this.file=null,this.imageData=null,this.fileErrors=[]}},data:function(){return{file:null,imageData:null,fileErrors:[]}}},d={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"avatar-file-upload",style:{width:t.displayWidth,"min-height":t.displayHeight},attrs:{config:t.config}},[e("h1",{staticClass:"text-center item-title"},[t._v(t._s(t.title))]),t._v(" "),t.fileErrors.length>1?e("div",{staticClass:"center-block alert alert-block alert-danger",staticStyle:{width:"800px"},attrs:{id:"kv-avatar-errors-1"}},[e("ul",t._l(t.fileErrors,function(a,i){return e("li",{key:i,domProps:{innerHTML:t._s(a)}})}))]):t._e(),t._v(" "),e("form",{staticClass:"form-base text-center",attrs:{id:"avatar-upload",action:t.config.awsUrl,method:"POST",enctype:"multipart/form-data"}},[t.user?e("input",{attrs:{type:"hidden",name:"key"},domProps:{value:"avatars/"+t.user.user_id}}):t._e(),t._v(" "),t._l(t.awsInputs,function(t,a){return e("input",{key:t,ref:"aws-input-"+a.toLowerCase(),refInFor:!0,attrs:{type:"hidden",name:a},domProps:{value:t}})}),t._v(" "),e("div",{staticClass:"kv-avatar center-block",staticStyle:{width:"200px"}},[e("div",{staticClass:"file-input theme-fa has-error"},[e("button",{staticClass:"btn btn-default fileinput-upload fileinput-upload-button",attrs:{type:"submit",tabindex:"500",title:"Upload selected files",disabled:t.isDisabled}},[e("font-awesome-icon",{attrs:{icon:"upload"}}),e("span",{staticClass:"hidden-xs"},[t._v(" Upload")])],1),t._v(" "),e("div",{staticClass:"btn btn-primary btn-file",attrs:{tabindex:"500"}},[e("font-awesome-icon",{attrs:{icon:"folder-open"}}),e("input",{ref:"file",staticClass:"file-loading",attrs:{id:"avatar",name:"file",type:"file",accept:t.acceptFileExtensions},on:{change:t.changeFile}})],1),t._v(" "),e("p"),t._v(" "),t.file?e("div",{staticClass:"file-preview"},[e("div",{staticClass:"close fileinput-remove",staticStyle:{cursor:"pointer"},on:{click:function(a){t.removeFile(t.file)}}},[t._v("×")]),t._v(" "),e("div",{staticClass:"file-drop-disabled"},[e("div",{staticClass:"file-preview-thumbnails"},[e("div",{staticClass:"file-preview-frame krajee-default  kv-preview-thumb file-preview-error",staticStyle:{width:"97%"},attrs:{"data-fileindex":"0","data-template":"image"}},[e("div",{staticClass:"kv-file-content"},[t.imageData?e("img",{staticClass:"file-preview-image kv-preview-data",staticStyle:{width:"auto",height:"160px"},attrs:{src:t.imageData,title:t.file.name,alt:t.file.name}}):e("LoadingComp")],1),t._v(" "),e("div",{staticClass:"file-thumbnail-footer"},[e("div",{staticClass:"file-footer-caption",attrs:{title:t.file.name}},[t._v(t._s(t.file.name)),e("br"),t._v(" "),e("samp",[t._v("("+t._s(t.humanSize)+")")])])])])])]),t._v(" "),e("div",{staticClass:"clearfix"}),t._v(" "),e("div",{staticClass:"file-preview-status text-center text-success"}),t._v(" "),e("div",{staticClass:"kv-fileinput-error"})]):t._e()])])],2)])},staticRenderFns:[]};var u=e("mUJo")(c,d,!1,function(t){e("OOIt")},"data-v-0afee922",null).exports,f={name:"avatar-gravatar",mixins:[s.a,l.a],computed:{displayWidth:function(){return this.config.width?this.config.width:"100%"},displayHeight:function(){return this.config.height?this.config.height:"400px"}},data:function(){return{}}},v={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"avatar-gravatar",style:{width:t.displayWidth,"min-height":t.displayHeight},attrs:{config:t.config}},[e("h1",{staticClass:"text-center item-title"},[t._v(t._s(t.title))]),t._v(" "),e("div",[e("form",{staticClass:"form-base text-center form-inline",attrs:{action:"/"+t.lang+"/profile/avatar",method:"POST"}},[t._m(0),t._v(" "),e("div",{staticClass:"kv-avatar center-block",staticStyle:{width:"200px"},attrs:{id:"view_gravatar"}},[e("div",{staticClass:"file-preview"},[e("div",{staticClass:"file-drop-disabled"},[e("div",{staticClass:"file-preview-thumbnails"},[e("div",{staticClass:"file-default-preview"},[e("img",{attrs:{src:t.gravatarUrl}}),t._v(" "),t.currentIs("gravatar")&&t.isPending?e("p",[t._v(t._s(t.getTrans("avatar_pending_approval")))]):t._e()])])])]),t._v(" "),e("br"),t._v(" "),e("button",{class:"btn btn-lg btn-primary btn-block"+(t.currentIs("gravatar")?" disabled":""),attrs:{id:"gravatar-select"}},[t._v(t._s(t.getTrans("btn_use_gravatar")))])])])])])},staticRenderFns:[function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"form-group"},[a("input",{attrs:{type:"hidden",name:"select-gravatar",id:"select-gravatar",value:"1"}})])}]};var p=e("mUJo")(f,v,!1,function(t){e("x+VM")},"data-v-25fdffb6",null).exports,h={name:"avatar_handler",mixins:[s.a,l.a],components:{"avatar-builtin-selector":i.default,"avatar-file-upload":u,"avatar-gravatar":p},computed:{displayWidth:function(){return this.config.width?this.config.width:"100%"},displayHeight:function(){return this.config.height?this.config.height:"420px"}},data:function(){return{currentTab:this.config.initialTab}}},g={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"avatar-handler",style:{width:t.displayWidth,"min-height":t.displayHeight},attrs:{config:t.config}},[e("ul",{staticClass:"nav nav-tabs",attrs:{role:"tablist"}},[e("li",{class:t.currentIs("upload")?"active":"",attrs:{role:"presentation"}},[e("a",{attrs:{href:"#tabupload","aria-controls":"tabupload",role:"tab","data-toggle":"tab"}},[t._v("Upload")])]),t._v(" "),e("li",{class:t.currentIs("gravatar")?"active":"",attrs:{role:"presentation"}},[e("a",{attrs:{href:"#tabgravatar","aria-controls":"tabgravatar",role:"tab","data-toggle":"tab"}},[t._v("Gravatar")])]),t._v(" "),e("li",{class:t.currentIs("builtin")?"active":"",attrs:{role:"presentation"}},[e("a",{attrs:{href:"#tabbuiltin","aria-controls":"builtin",role:"tab","data-toggle":"tab"}},[t._v("Asmodee.net")])])]),t._v(" "),e("div",{staticClass:"tab-content"},[e("div",{class:"tab-pane"+(t.currentIs("upload")?" active":""),attrs:{role:"tabpanel",id:"tabupload"}},[e("avatar-file-upload",{attrs:{config:{width:"100%",height:"100%",trans:t.config.trans,awsInputs:t.config.awsInputs,awsUrl:t.config.awsUrl}}})],1),t._v(" "),e("div",{class:"tab-pane"+(t.currentIs("gravatar")?" active":""),attrs:{role:"tabpanel",id:"tabgravatar"}},[e("avatar-gravatar",{attrs:{config:{width:"100%",height:"100%",trans:t.config.trans}}})],1),t._v(" "),e("div",{class:"tab-pane"+(t.currentIs("builtin")?" active":""),attrs:{role:"tabpanel",id:"tabbuiltin"}},[e("avatar-builtin-selector",{attrs:{config:{width:"100%",height:"100%",currentFilter:t.config.currentFilter,trans:t.config.trans}}})],1)])])},staticRenderFns:[]};var b=e("mUJo")(h,g,!1,function(t){e("nLB7")},"data-v-516ae536",null);a.default=b.exports},scWE:function(t,a,e){var i=e("GJ5T");t.exports=function(t,a){if(!i(t))return t;var e,r;if(a&&"function"==typeof(e=t.toString)&&!i(r=e.call(t)))return r;if("function"==typeof(e=t.valueOf)&&!i(r=e.call(t)))return r;if(!a&&"function"==typeof(e=t.toString)&&!i(r=e.call(t)))return r;throw TypeError("Can't convert object to primitive value")}},wZkS:function(t,a,e){"use strict";var i=e("wYgs"),r=e("MgXD"),n=e("7Mi/");const s={myAccount:t=>(t=t||!1,i.a.http.get(i.a.convert("/v1/user/me"),{cache:n.b,forceUpdate:t})),details:(t,...a)=>(0===a.length&&(a=["achievements","userapps","nbbuddies","onlinegames"]),i.a.http.get(i.a.convert("/v1/user/"+t+"?extras="+a.join(","),"details"),{cache:n.b})),achievements:t=>(t=t||"me",i.a.http.get(i.a.convert("/v1/user/"+t+"?extras=achievements","achievements"),{cache:n.b})),activities:t=>i.a.http.get(i.a.convert("/v1/user/"+t+"?extras=userapps","activity"),{cache:n.a}),onlineGames:(t,a)=>i.a.http.get(i.a.convert("/v1/user/"+t+"/games/summary"+(a?"/"+a:"")),{cache:n.a}),rank:(t,a)=>i.a.http.get(i.a.convert("/v1/user/"+t+"/rank/"+a),{cache:n.a}),myRank:t=>s.rank("me",t),buddiesCollection:()=>i.a.http.get("/v1/user/me/buddies/collection",{cache:n.b}),addBuddy:t=>i.a.http.post("/v1/user/me/buddies/"+t),removeBuddy:t=>i.a.http.delete("/v1/user/me/buddies/"+t),lastgames:(t,a,e,s,l)=>Object(r.a)(i.a.convert("/v1/user/"+t+"/lastgames/"+a,"lastgames"),s,{limit:l,status:e},{cache:n.b}),history:(t,a,e,s,l,o)=>Object(r.a)(i.a.convert("/v1/user/"+t+"/games/"+a,"history"),l,{limit:o,y:s,status:e,o:0},{cache:n.b})};a.a=s},"x+VM":function(t,a,e){var i=e("hb/G");"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);(0,e("pFN4").default)("4b0204cc",i,!0,{})},yG49:function(t,a,e){(t.exports=e("Vmy+")(!1)).push([t.i,".builtin-avatar-selector[data-v-402f0ac8] h1{color:#b3b3b3;font-size:36px;font-weight:400;display:block;text-align:center}.builtin-avatar-selector[data-v-402f0ac8] .panel{align-content:flex-start;display:inline-flex;flex-wrap:wrap}.builtin-avatar-selector[data-v-402f0ac8] .panel.panelselector.alwaysfoot{background-color:#BBBBBB77;bottom:0;height:260px;left:15px;padding:0;position:fixed;z-index:4}.builtin-avatar-selector[data-v-402f0ac8] .panel.panelselector.alwaysfoot .avatar,.builtin-avatar-selector[data-v-402f0ac8] .panel.panelselector.alwaysfoot label{background-color:#fff}.builtin-avatar-selector[data-v-402f0ac8] .panel.panelselector.alwaysfoot .panel-body{padding-top:0}.builtin-avatar-selector[data-v-402f0ac8] .panel.panelselector .panel-body{margin:auto}.builtin-avatar-selector[data-v-402f0ac8] .panel.panelselector .panel-body label{margin:5px auto}@media (max-width:991.98px){.builtin-avatar-selector[data-v-402f0ac8] .panel.panelselector{padding-left:.5em;padding-right:.5em;min-width:140px}}@media (max-width:449.98px){.builtin-avatar-selector[data-v-402f0ac8] .panel .panel-body{margin:auto}}.builtin-avatar-selector[data-v-402f0ac8] .avatars_list{align-content:flex-start;display:inline-flex;flex-wrap:wrap;list-style:none;height:100%;padding:0}.builtin-avatar-selector[data-v-402f0ac8] .avatar{border-radius:5px;box-shadow:-1px 1px 5px 0 #a2958a;color:#777;display:inline-block;font-size:.8em;margin:5px auto;max-height:140px;min-height:108px;padding:5px;text-align:center;width:90px}.builtin-avatar-selector[data-v-402f0ac8] .avatar.active{background-color:#55387c}.builtin-avatar-selector[data-v-402f0ac8] .avatar .thumb{background-color:#fff;cursor:pointer;display:block;text-align:center;vertical-align:middle;width:100%;height:100%}.builtin-avatar-selector[data-v-402f0ac8] .avatar .thumb img{max-height:85px;max-width:80px}.builtin-avatar-selector[data-v-402f0ac8] .avatar .thumb span{display:inline-block;margin-top:5px}.builtin-avatar-selector[data-v-402f0ac8] .selector{list-style:none;margin:5px auto;text-align:center;width:100%;padding:0}@media (max-width:767.98px){.builtin-avatar-selector[data-v-402f0ac8] .panelselector{width:100%}}",""])},yhwo:function(t,a,e){var i=e("p0o+");t.exports=function(t,a,e){if(i(t),void 0===a)return t;switch(e){case 1:return function(e){return t.call(a,e)};case 2:return function(e,i){return t.call(a,e,i)};case 3:return function(e,i,r){return t.call(a,e,i,r)}}return function(){return t.apply(a,arguments)}}}});
//# sourceMappingURL=asnetapi.3.d4371f6bc47073c8b05c.js.map