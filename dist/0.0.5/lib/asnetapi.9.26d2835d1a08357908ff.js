webpackJsonp([9],{"6Vvq":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=a("uj17"),r=a.n(s),n=a("vdRI"),i=a("wYgs"),c=a("ByyM"),l=a("7Mi/");var o={filters:e=>i.a.http.get(i.a.convert("/v1/avatar/filters/"+e),{cache:l.b}),all:e=>i.a.http.get(i.a.convert("/v1/avatars"+(e?"/"+e:"")),{cache:l.b})},u=a("DPF+"),d=a("NKRj"),v={name:"avatar-builtin-selector",mixins:[u.a,d.a],computed:{displayWidth:function(){return this.config.width?this.config.width:"100%"},displayHeight:function(){return this.config.height?this.config.height:"400px"}},methods:{getBuiltins:function(){var e=this;r.a.all([c.a.all(),o.filters(this.lang)]).then(r.a.spread(function(t,a){e.games=t.data.games,e.filters=a.data.filters,null===e.selectedAvatar||350===e.selectedAvatar.id?e.currentFilter="fivetribes":e.currentFilter=e.config.currentFilter,e.refreshAvatars()})),n.a.getters.baseUser.avatar>0&&(this.selectedAvatar={id:n.a.getters.baseUser.avatar})},refreshAvatars:function(){this.avatars=null;var e=this;o.all(this.currentFilter).then(function(t){e.avatars=t.data.avatars,e.selectedAvatar&&!e.selectedAvatar.name&&(e.selectedAvatar=e.avatars.filter(function(t){return t.id===e.selectedAvatar.id})[0])})},selectAvatar:function(e){this.selectedAvatar=e,this.selectNewAvatar=!0}},mounted:function(){i.a.ifInitialized(this.getBuiltins)},data:function(){return{games:null,filters:null,currentFilter:null,avatars:null,selectedAvatar:null,selectNewAvatar:!1}}},h={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"builtin-avatar-selector",style:{width:e.displayWidth,"min-height":e.displayHeight},attrs:{config:e.config}},[a("h1",[e._v(e._s(e.title))]),e._v(" "),null===e.filters?[a("LoadingComp")]:[a("div",[a("select",{directives:[{name:"model",rawName:"v-model",value:e.currentFilter,expression:"currentFilter"}],staticClass:"form-control bs-select",attrs:{name:"select_filter"},on:{change:[function(t){var a=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){return"_value"in e?e._value:e.value});e.currentFilter=t.target.multiple?a:a[0]},function(t){e.refreshAvatars()}]}},e._l(e.orderBy(e.filters,"name"),function(t){return a("option",{key:t.id,domProps:{value:t.id}},[e._v(e._s(t.name))])})),e._v(" "),a("panel",{attrs:{config:{width:("md"===this.$mq?75:"sm"===this.$mq||"xs"===this.$mq?60:"xxs"===this.$mq?100:77)+"%",height:e.displayHeight}}},[a("template",{slot:"body"},[null!==e.avatars?[a("ul",{staticClass:"avatars_list"},e._l(e.avatars,function(t){return a("li",{key:t.id,class:{avatar:!0,active:e.selectedAvatar&&e.selectedAvatar.id===t.id},on:{click:function(a){e.selectAvatar(t)}}},[a("div",{staticClass:"thumb"},[a("img",{attrs:{src:t.img}}),e._v(" "),a("span",[e._v(e._s(t.name))])])])}))]:[a("LoadingComp")]],2)],2),e._v(" "),"builtin"===e.typeOfAvatar()||null!==e.selectedAvatar?a("panel",{class:"panelselector"+("xxs"===this.$mq?" alwaysfoot":""),attrs:{config:{width:("md"===this.$mq?23:"sm"===this.$mq||"xs"===this.$mq?38:"xxs"===this.$mq?92:22)+"%",height:"xxs"===this.$mq?"120px":"100%"}}},[a("template",{slot:"body"},[a("form",{attrs:{action:"/"+e.lang+"/profile/avatar",method:"POST"}},[a("input",{attrs:{type:"hidden",name:"select-builtin",id:"select-builtin",value:"1"}}),e._v(" "),!0===e.selectNewAvatar?a("input",{attrs:{type:"hidden",name:"selectedAvatar"},domProps:{value:e.selectedAvatar.id}}):e._e(),e._v(" "),a("label",{attrs:{for:"selectedAvatar"}},[e._v(e._s(!0===e.selectNewAvatar?e.getTrans("confirm_use_builtin_avatar"):e.getTrans("current_avatar")))]),e._v(" "),a("ul",{staticClass:"selector"},[a("li",{staticClass:"avatar"},[a("div",{staticClass:"thumb"},[null!==e.selectedAvatar&&void 0!==e.selectedAvatar?a("img",{attrs:{src:e.selectedAvatar.img}}):e._e(),e._v(" "),a("span",[e._v(e._s(null!==e.selectedAvatar&&void 0!==e.selectedAvatar?e.selectedAvatar.name:""))])])])]),e._v(" "),a("div",{staticClass:"selector"},[a("button",{staticClass:"btn btn-primary auto",attrs:{disabled:!0!==e.selectNewAvatar}},[e._v(e._s(e.getTrans("update")))])])])])],2):e._e()],1)]],2)},staticRenderFns:[]};var p=a("mUJo")(v,h,!1,function(e){a("HHeF")},"data-v-402f0ac8",null);t.default=p.exports},"7Mi/":function(e,t,a){"use strict";a.d(t,"a",function(){return r}),a.d(t,"b",function(){return n});var s=a("XQ85");const r=new s.a;r.maxAge=6e5;const n=new s.a;n.maxAge=864e5},ByyM:function(e,t,a){"use strict";var s=a("wYgs"),r=a("7Mi/");const n={all:()=>s.a.http.get(s.a.convert("/v1/games"),{cache:r.b}),rankables:()=>s.a.http.get(s.a.convert("/v1/game/rankables"),{cache:r.b}),achievements:e=>s.a.http.get(s.a.convert("/v1/game/"+e+"/achievements?limit=200"),{cache:r.b})};t.a=n},"DPF+":function(e,t,a){"use strict";var s=a("vdRI"),r=function(e){delete e.target.onerror,e.target.src="https://cdn.daysofwonder.com/images/avatars/avatar-neutral.jpg"},n=function(e){delete e.target.onerror,delete e.target.src},i=function(e){delete e.target.onerror,delete e.target.src};var c=function(){const e=/^({(-?\d+(\.\d+)?\s*(,?\s*(-?\d+(\.\d+)?))*)})\s(.+)$/,t=/^(([[\]])\s*(-Inf|-?\d+(\.\d+)?)\s*,\s*(\+?Inf|-?\d+(\.\d+)?)\s*([[\]]))\s(.+)$/;function a(e){return"-Inf"===e?-1/0:"+Inf"===e||"Inf"===e?1/0:parseFloat(e)}let s=function(s,r){r=r.trim();let n=e.exec(r)||t.exec(r);if(!n)return console.error('"'+r+'" is not a valid interval.'),!1;if(n[3]){let e=a(n[3]),t=a(n[5]);return("["===n[2]?s>=e:s>e)&&("]"===n[7]?s<=t:s<t)}{let e=n[2].split(",");for(let t=0;t<e.length;t++){let a=e[t];if(s===parseInt(a))return!0}}return!1},r=function(e,t){switch("pt_BR"===t&&(t="xbr"),t.length>3&&(t=t.split("_")[0]),t){case"az":case"bo":case"dz":case"id":case"ja":case"jv":case"ka":case"km":case"kn":case"ko":case"ms":case"th":case"tr":case"vi":case"zh":return 0;case"af":case"bn":case"bg":case"ca":case"da":case"de":case"el":case"en":case"eo":case"es":case"et":case"eu":case"fa":case"fi":case"fo":case"fur":case"fy":case"gl":case"gu":case"ha":case"he":case"hu":case"is":case"it":case"ku":case"lb":case"ml":case"mn":case"mr":case"nah":case"nb":case"ne":case"nl":case"nn":case"no":case"oc":case"om":case"or":case"pa":case"pap":case"ps":case"pt":case"so":case"sq":case"sv":case"sw":case"ta":case"te":case"tk":case"ur":case"zu":return 1===e?0:1;case"am":case"bh":case"fil":case"fr":case"gun":case"hi":case"hy":case"ln":case"mg":case"nso":case"xbr":case"ti":case"wa":return 0===e||1===e?0:1;case"be":case"bs":case"hr":case"ru":case"sh":case"sr":case"uk":return 1===e&&e%100!=11?0:e%10>=2&&e%10<=4&&(e%100<10||e%100>=20)?1:2;case"cs":case"sk":return 1===e?0:e>=2&&e<=4?1:2;case"ga":return 1===e?0:2===e?1:2;case"lt":return e%10==1&&e%100!=11?0:e%10>=2&&(e%100<10||e%100>=20)?1:2;case"sl":return e%100==1?0:e%100==2?1:e%100==3||e%100==4?2:3;case"mk":return e%10==1?0:1;case"mt":return 1===e?0:0===e||e%100>1&&e%100<11?1:e%100>10&&e%100<20?2:3;case"lv":return 0===e?0:e%10==1&&e%100!=11?1:2;case"pl":return 1===e?0:e%10>=2&&e%10<=4&&(e%100<12||e%100>14)?1:2;case"cy":return 1===e?0:2===e?1:8===e||11===e?2:3;case"ro":return 1===e?0:0===e||e%100>0&&e%100<20?1:2;case"ar":return 0===e?0:1===e?1:2===e?2:e%100>=3&&e%100<=10?3:e%100>=11&&e%100<=99?4:5;default:return 0}},n=function(e,t){return t&&Object.keys(t).forEach(function(a){e=e.replace(a,t[a])}),e};return{getTrans:function(e,t,a,s){if(void 0!==e[a]){return n(e[a],s)}return""},getTransChoice:function(a,i,c,l,o){if(void 0!==a[l]){let u=function(a,n,i){let c,l=a.split("|"),o={},u=[];l.forEach(function(a){a=a.replace("||","|").trim(),(c=e.exec(a))?o[c[0]]=c:(c=t.exec(a))?o[c[0]]=c:(c=/^\w+:\s*(.*?)$/.exec(a))?u.push(c[1]):u.push(a)});let d=Object.keys(o);for(let e=0;e<d.length;e++){let t=d[e];if(s(n,t))return o[t][o[t].length-1]}let v=r(n,i);return void 0===u[v]?1===l.length&&void 0!==u[0]?u[0]:(console.error('Unable to choose a translation for "'+a+'" with locale "'+i+'" for value "'+n+'". Double check that this translation has the correct plural options (e.g. "There is one apple|There are %%count%% apples").'),""):u[v]}(a[l],c,i);return n(u,o)}return""}}}();const l={props:["config"],computed:{title(){return this.getTrans(this.$options.name+"_title")},lang(){return this.$moment.locale()!==s.a.getters.globalOptions.lang&&this.$moment.locale(s.a.getters.globalOptions.lang),s.a.getters.globalOptions.lang},gameIconError:()=>n,avatarError:()=>r,achievementError:()=>i,isLogged:()=>!s.a.getters.unloggedMode,isIn3rdParty:()=>!!s.a.getters.globalOptions.in_3rd_party},methods:{getTrans(e,t){return c.getTrans(this.config.trans,this.lang,e,t)},getTransChoice(e,t,a){return c.getTransChoice(this.config.trans,this.lang,e,t,a)},baseHost:()=>s.a.getters.globalOptions.host?s.a.getters.globalOptions.host.replace(/\/$/,""):"",urlFor(e,t){if(t=t||{},this.config.urls&&this.config.urls[e]){let a="/"+this.lang+this.config.urls[e];return Object.keys(t).forEach(function(e){a=a.replace(":"+e,t[e])}),this.baseHost()+a}return""},goToGame(e){let t=this.urlFor("game-index",{id:e});this.isIn3rdParty?window.open(t):window.location=t},goToGameRanking(e){let t=this.urlFor("rankings-game",{id:e});this.isIn3rdParty?window.open(t):window.location=t},forceHTTPS:e=>e?e.replace("^http://","https://"):e}};t.a=l},HHeF:function(e,t,a){var s=a("yG49");"string"==typeof s&&(s=[[e.i,s,""]]),s.locals&&(e.exports=s.locals);(0,a("pFN4").default)("fb19c12e",s,!0,{})},NKRj:function(e,t,a){"use strict";var s=a("wYgs"),r=a("wZkS");const n={props:["config"],computed:{gravatarUrl(){return this.user?"https://www.gravatar.com/avatar/"+CryptoJS.MD5(this.user.email.trim().toLowerCase()).toString():null},isPending(){return this.config.pending}},methods:{getUserDetails(e){let t=this;r.a.myAccount(e).then(e=>{t.user=e.data.user}).catch(e=>{console.error("An error occured:",e.message)})},typeOfAvatar(){if(this.user){let e="upload";return this.user.avatar.startsWith("https://www.gravatar.com/avatar/")?e="gravatar":this.user.avatar.startsWith("https://uploads.asmodee.net/builtin")&&(e="builtin"),e}return null},currentIs(e){return this.typeOfAvatar()===e}},mounted(){s.a.ifInitialized(this.getUserDetails)},data:()=>({user:null})};t.a=n},wZkS:function(e,t,a){"use strict";var s=a("wYgs"),r=a("7Mi/");const n={myAccount:e=>(e=e||!1,s.a.http.get(s.a.convert("/v1/user/me"),{cache:r.b,forceUpdate:e})),details:e=>s.a.http.get(s.a.convert("/v1/user/"+e+"?extras=achievements,userapps,nbbuddies,onlinegames","details"),{cache:r.b}),achievements:e=>(e=e||"me",s.a.http.get(s.a.convert("/v1/user/"+e+"?extras=achievements","achievements"),{cache:r.b})),activities:e=>s.a.http.get(s.a.convert("/v1/user/"+e+"?extras=userapps","activity"),{cache:r.a}),onlineGames:(e,t)=>s.a.http.get(s.a.convert("/v1/user/"+e+"/games/summary"+(t?"/"+t:"")),{cache:r.a}),rank:(e,t)=>s.a.http.get(s.a.convert("/v1/user/"+e+"/rank/"+t),{cache:r.a}),myRank:e=>n.rank("me",e),buddiesCollection:()=>s.a.http.get("/v1/user/me/buddies/collection",{cache:r.b}),addBuddy:e=>s.a.http.post("/v1/user/me/buddies/"+e),removeBuddy:e=>s.a.http.delete("/v1/user/me/buddies/"+e)};t.a=n},yG49:function(e,t,a){(e.exports=a("Vmy+")(!1)).push([e.i,".builtin-avatar-selector[data-v-402f0ac8] h1{color:#b3b3b3;font-size:36px;font-weight:400;display:block;text-align:center}.builtin-avatar-selector[data-v-402f0ac8] .panel{align-content:flex-start;display:inline-flex;flex-wrap:wrap}.builtin-avatar-selector[data-v-402f0ac8] .panel.panelselector.alwaysfoot{background-color:#BBBBBB77;bottom:0;height:260px;left:15px;padding:0;position:fixed;z-index:4}.builtin-avatar-selector[data-v-402f0ac8] .panel.panelselector.alwaysfoot .avatar,.builtin-avatar-selector[data-v-402f0ac8] .panel.panelselector.alwaysfoot label{background-color:#fff}.builtin-avatar-selector[data-v-402f0ac8] .panel.panelselector.alwaysfoot .panel-body{padding-top:0}.builtin-avatar-selector[data-v-402f0ac8] .panel.panelselector .panel-body{margin:auto}.builtin-avatar-selector[data-v-402f0ac8] .panel.panelselector .panel-body label{margin:5px auto}@media (max-width:991.98px){.builtin-avatar-selector[data-v-402f0ac8] .panel.panelselector{padding-left:.5em;padding-right:.5em;min-width:140px}}@media (max-width:449.98px){.builtin-avatar-selector[data-v-402f0ac8] .panel .panel-body{margin:auto}}.builtin-avatar-selector[data-v-402f0ac8] .avatars_list{align-content:flex-start;display:inline-flex;flex-wrap:wrap;list-style:none;height:100%;padding:0}.builtin-avatar-selector[data-v-402f0ac8] .avatar{border-radius:5px;box-shadow:-1px 1px 5px 0 #a2958a;color:#777;display:inline-block;font-size:.8em;margin:5px auto;max-height:140px;min-height:108px;padding:5px;text-align:center;width:90px}.builtin-avatar-selector[data-v-402f0ac8] .avatar.active{background-color:#55387c}.builtin-avatar-selector[data-v-402f0ac8] .avatar .thumb{background-color:#fff;cursor:pointer;display:block;text-align:center;vertical-align:middle;width:100%;height:100%}.builtin-avatar-selector[data-v-402f0ac8] .avatar .thumb img{max-height:85px;max-width:80px}.builtin-avatar-selector[data-v-402f0ac8] .avatar .thumb span{display:inline-block;margin-top:5px}.builtin-avatar-selector[data-v-402f0ac8] .selector{list-style:none;margin:5px auto;text-align:center;width:100%;padding:0}@media (max-width:767.98px){.builtin-avatar-selector[data-v-402f0ac8] .panelselector{width:100%}}",""])}});
//# sourceMappingURL=asnetapi.9.26d2835d1a08357908ff.js.map