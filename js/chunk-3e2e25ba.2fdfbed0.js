(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3e2e25ba"],{"2d3b":function(t,a,s){"use strict";s.r(a);var e=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"search"},[s("div",[s("van-nav-bar",{attrs:{"left-text":"返回","left-arrow":""},on:{"click-left":t.back}})],1),s("van-search",{attrs:{"left-arrow":"",placeholder:"请输入搜索关键词","show-action":"",shape:"round"},on:{input:function(a){return t.getSearch(t.value)}},model:{value:t.value,callback:function(a){t.value=a},expression:"value"}},[s("div",{attrs:{slot:"action"},slot:"action"},[t._v("搜索")])]),s("div",{staticClass:"searchbox"},[s("van-tabs",{model:{value:t.active,callback:function(a){t.active=a},expression:"active"}},[s("van-tab",{attrs:{title:"漫画"}},[s("div",{staticClass:"searchMH"},t._l(t.mhnameData.list,(function(a,e){return s("div",{key:e,staticClass:"searchlise clearfix",on:{click:function(s){return t.particularsGo({name:"particulars",params:{url:a.url}})}}},[s("div",{staticClass:"pho fl"},[s("img",{staticClass:"auto-img",attrs:{src:a.cover,alt:""}})]),s("div",{staticClass:"text fl"},[s("h3",{staticClass:"one-text"},[t._v(t._s(a.name))]),s("p",{staticClass:"one-text"},[t._v(t._s(a.author)+" "+t._s(a.status))]),s("p",{staticClass:"tow-text"},[t._v(t._s(a.latest)+" "+t._s(a.tag))])])])})),0)]),s("van-tab",{attrs:{title:"小说"}},[s("div",{staticClass:"searchMH"},t._l(t.xsnameData.list,(function(a,e){return s("div",{key:e,staticClass:"searchlise clearfix",on:{click:function(s){return t.particularsGo({name:"details",params:{url:a.url}})}}},[s("div",{staticClass:"pho fl"},[s("img",{staticClass:"auto-img",attrs:{src:a.cover,alt:""}})]),s("div",{staticClass:"text fl"},[s("h3",{staticClass:"one-text"},[t._v(t._s(a.name))]),s("p",{staticClass:"one-text"},[t._v(t._s(a.author)+" "+t._s(a.status))]),s("p",{staticClass:"tow-text"},[t._v(t._s(a.latest)+" "+t._s(a.tag))])])])})),0)])],1)],1)],1)},i=[],c={name:"search",data:function(){return{i:0,active:2,value:"",mhnameData:[],xsnameData:[]}},methods:{getSearch:function(t){var a=this;this.axios({methods:"GET",url:"http://api.pingcc.cn/?mhname="+t}).then((function(t){a.mhnameData=t.data})),this.axios({methods:"GET",url:"http://api.pingcc.cn/?xsname="+t}).then((function(t){a.xsnameData=t.data}))},particularsGo:function(t){this.$router.push(t)},back:function(){this.$router.go(-1)}},created:function(){this.getSearch()}},n=c,r=(s("43cf"),s("eee7"),s("2877")),l=Object(r["a"])(n,e,i,!1,null,"0f4e9f1e",null);a["default"]=l.exports},"43cf":function(t,a,s){"use strict";var e=s("647d"),i=s.n(e);i.a},"647d":function(t,a,s){},d795:function(t,a,s){},eee7:function(t,a,s){"use strict";var e=s("d795"),i=s.n(e);i.a}}]);
//# sourceMappingURL=chunk-3e2e25ba.2fdfbed0.js.map