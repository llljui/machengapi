webpackJsonp([2],{"+61r":function(e,t,r){var a=r("Vu3F");"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);r("FIqI")("9a061ef4",a,!0,{})},"1IkZ":function(e,t,r){"use strict";var a=r("5Q3Q"),o=r("nvIQ"),n={brackets:function(e){return e+"[]"},indices:function(e,t){return e+"["+t+"]"},repeat:function(e){return e}},i=Date.prototype.toISOString,l={delimiter:"&",encode:!0,encoder:a.encode,encodeValuesOnly:!1,serializeDate:function(e){return i.call(e)},skipNulls:!1,strictNullHandling:!1},c=function e(t,r,o,n,i,c,s,d,f,u,p,v){var g=t;if("function"==typeof s)g=s(r,g);else if(g instanceof Date)g=u(g);else if(null===g){if(n)return c&&!v?c(r,l.encoder):r;g=""}if("string"==typeof g||"number"==typeof g||"boolean"==typeof g||a.isBuffer(g)){if(c){return[p(v?r:c(r,l.encoder))+"="+p(c(g,l.encoder))]}return[p(r)+"="+p(String(g))]}var y=[];if(void 0===g)return y;var b;if(Array.isArray(s))b=s;else{var A=Object.keys(g);b=d?A.sort(d):A}for(var m=0;m<b.length;++m){var h=b[m];i&&null===g[h]||(y=Array.isArray(g)?y.concat(e(g[h],o(r,h),o,n,i,c,s,d,f,u,p,v)):y.concat(e(g[h],r+(f?"."+h:"["+h+"]"),o,n,i,c,s,d,f,u,p,v)))}return y};e.exports=function(e,t){var r=e,i=t?a.assign({},t):{};if(null!==i.encoder&&void 0!==i.encoder&&"function"!=typeof i.encoder)throw new TypeError("Encoder has to be a function.");var s=void 0===i.delimiter?l.delimiter:i.delimiter,d="boolean"==typeof i.strictNullHandling?i.strictNullHandling:l.strictNullHandling,f="boolean"==typeof i.skipNulls?i.skipNulls:l.skipNulls,u="boolean"==typeof i.encode?i.encode:l.encode,p="function"==typeof i.encoder?i.encoder:l.encoder,v="function"==typeof i.sort?i.sort:null,g=void 0!==i.allowDots&&i.allowDots,y="function"==typeof i.serializeDate?i.serializeDate:l.serializeDate,b="boolean"==typeof i.encodeValuesOnly?i.encodeValuesOnly:l.encodeValuesOnly;if(void 0===i.format)i.format=o.default;else if(!Object.prototype.hasOwnProperty.call(o.formatters,i.format))throw new TypeError("Unknown format option provided.");var A,m,h=o.formatters[i.format];"function"==typeof i.filter?(m=i.filter,r=m("",r)):Array.isArray(i.filter)&&(m=i.filter,A=m);var w=[];if("object"!=typeof r||null===r)return"";var C;C=i.arrayFormat in n?i.arrayFormat:"indices"in i?i.indices?"indices":"repeat":"indices";var j=n[C];A||(A=Object.keys(r)),v&&A.sort(v);for(var O=0;O<A.length;++O){var B=A[O];f&&null===r[B]||(w=w.concat(c(r[B],B,j,d,f,u?p:null,m,v,g,y,h,b)))}var x=w.join(s),_=!0===i.addQueryPrefix?"?":"";return x.length>0?_+x:""}},"5Q3Q":function(e,t,r){"use strict";var a=Object.prototype.hasOwnProperty,o=function(){for(var e=[],t=0;t<256;++t)e.push("%"+((t<16?"0":"")+t.toString(16)).toUpperCase());return e}(),n=function(e){for(var t;e.length;){var r=e.pop();if(t=r.obj[r.prop],Array.isArray(t)){for(var a=[],o=0;o<t.length;++o)void 0!==t[o]&&a.push(t[o]);r.obj[r.prop]=a}}return t};t.arrayToObject=function(e,t){for(var r=t&&t.plainObjects?Object.create(null):{},a=0;a<e.length;++a)void 0!==e[a]&&(r[a]=e[a]);return r},t.merge=function(e,r,o){if(!r)return e;if("object"!=typeof r){if(Array.isArray(e))e.push(r);else{if("object"!=typeof e)return[e,r];(o.plainObjects||o.allowPrototypes||!a.call(Object.prototype,r))&&(e[r]=!0)}return e}if("object"!=typeof e)return[e].concat(r);var n=e;return Array.isArray(e)&&!Array.isArray(r)&&(n=t.arrayToObject(e,o)),Array.isArray(e)&&Array.isArray(r)?(r.forEach(function(r,n){a.call(e,n)?e[n]&&"object"==typeof e[n]?e[n]=t.merge(e[n],r,o):e.push(r):e[n]=r}),e):Object.keys(r).reduce(function(e,n){var i=r[n];return a.call(e,n)?e[n]=t.merge(e[n],i,o):e[n]=i,e},n)},t.assign=function(e,t){return Object.keys(t).reduce(function(e,r){return e[r]=t[r],e},e)},t.decode=function(e){try{return decodeURIComponent(e.replace(/\+/g," "))}catch(t){return e}},t.encode=function(e){if(0===e.length)return e;for(var t="string"==typeof e?e:String(e),r="",a=0;a<t.length;++a){var n=t.charCodeAt(a);45===n||46===n||95===n||126===n||n>=48&&n<=57||n>=65&&n<=90||n>=97&&n<=122?r+=t.charAt(a):n<128?r+=o[n]:n<2048?r+=o[192|n>>6]+o[128|63&n]:n<55296||n>=57344?r+=o[224|n>>12]+o[128|n>>6&63]+o[128|63&n]:(a+=1,n=65536+((1023&n)<<10|1023&t.charCodeAt(a)),r+=o[240|n>>18]+o[128|n>>12&63]+o[128|n>>6&63]+o[128|63&n])}return r},t.compact=function(e){for(var t=[{obj:{o:e},prop:"o"}],r=[],a=0;a<t.length;++a)for(var o=t[a],i=o.obj[o.prop],l=Object.keys(i),c=0;c<l.length;++c){var s=l[c],d=i[s];"object"==typeof d&&null!==d&&-1===r.indexOf(d)&&(t.push({obj:i,prop:s}),r.push(d))}return n(t)},t.isRegExp=function(e){return"[object RegExp]"===Object.prototype.toString.call(e)},t.isBuffer=function(e){return null!==e&&void 0!==e&&!!(e.constructor&&e.constructor.isBuffer&&e.constructor.isBuffer(e))}},"68Fj":function(e,t,r){"use strict";function a(e){r("+61r")}Object.defineProperty(t,"__esModule",{value:!0});var o=r("8GQg"),n=r("ZPmF"),i=r("Z0/y"),l=a,c=i(o.a,n.a,!1,l,"data-v-008c9725",null);t.default=c.exports},"8GQg":function(e,t,r){"use strict";var a=r("BMa3"),o=r.n(a),n=r("DEjr"),i=r.n(n);t.a={name:"userdetail",data:function(){return{name:null,tel:null,gettime:null,mygame:null,myzoom:null}},methods:{},mounted:function(){var e=this,t={cid:sessionStorage.cid,channel:sessionStorage.channel};o.a.post(sessionStorage.weburl+"/user/info",i.a.stringify(t),{headers:{"Content-Type":"application/x-www-form-urlencoded"}}).then(function(t){if(console.log(t),e.name=t.data.data.nickname,e.tel=t.data.data.mobile,e.gettime=t.data.data.dateline,1==t.data.data.cid)e.mygame="全民大冶";else{if(2!=t.data.data.cid)return;e.mygame="八道雀神"}if("tongjiang"==t.data.data.channel)e.myzoom="桐江";else{if("fuyang"!=t.data.data.channel)return;e.myzoom="富阳"}}).catch(function(e){console.log(e)})}}},DEjr:function(e,t,r){"use strict";var a=r("1IkZ"),o=r("trOs"),n=r("nvIQ");e.exports={formats:n,parse:o,stringify:a}},Vu3F:function(e,t,r){t=e.exports=r("UTlt")(!0),t.push([e.i,".alig[data-v-008c9725]{text-align:right;font-family:\\\\5FAE\\8F6F\\96C5\\9ED1;color:#8492a6}.bgrow[data-v-008c9725]{background-color:#fff;height:3vh;margin-top:1vh;padding-bottom:2vh;height:7vh}.brb[data-v-008c9725]{border-bottom:1px solid #ddd;padding-bottom:1vh;padding-left:2vw;padding-right:2vw;height:7vh;line-height:7vh;color:#1f2d3d}.textpri[data-v-008c9725]{color:#48576a;font-weight:lighter;font-size:.9rem}.bgrow[data-v-008c9725]:active{background-color:#e5e9f2}.fade-enter-active[data-v-008c9725],.fade-leave-active[data-v-008c9725]{-webkit-transition:opacity .5s;transition:opacity .5s}.fade-enter[data-v-008c9725],.fade-leave-active[data-v-008c9725]{opacity:0}","",{version:3,sources:["F:/gameSystem/wxstage/machengapi/wxstage/src/page/userdetail/userdetail.vue"],names:[],mappings:"AACA,uBAAuB,iBAAkB,kCAAmB,aAAe,CAC1E,AACD,wBAAwB,sBAAuB,WAAY,eAAgB,mBAAoB,UAAY,CAC1G,AACD,sBAAsB,6BAAiC,mBAAoB,iBAAkB,kBAAmB,WAAY,gBAAiB,aAAc,CAC1J,AACD,0BAA0B,cAAe,oBAAqB,eAAkB,CAC/E,AACD,+BAA+B,wBAA0B,CACxD,AACD,wEACU,+BAAgC,AAChC,sBAAuB,CAChC,AACD,iEACU,SAAU,CACnB",file:"userdetail.vue",sourcesContent:["\n.alig[data-v-008c9725]{text-align: right;font-family:'微软雅黑';color: #8492A6;\n}\n.bgrow[data-v-008c9725]{background-color:white;height: 3vh;margin-top: 1vh;padding-bottom: 2vh;height: 7vh;\n}\n.brb[data-v-008c9725]{border-bottom: 1px solid #dddddd;padding-bottom: 1vh;padding-left: 2vw;padding-right: 2vw;height: 7vh;line-height: 7vh;color:#1F2D3D;\n}\n.textpri[data-v-008c9725]{color: #48576a;font-weight: lighter;font-size: 0.9rem;\n}\n.bgrow[data-v-008c9725]:active{background-color: #E5E9F2;\n}\n.fade-enter-active[data-v-008c9725], .fade-leave-active[data-v-008c9725] {\r\n          -webkit-transition: opacity .5s;\r\n          transition: opacity .5s\n}\n.fade-enter[data-v-008c9725], .fade-leave-active[data-v-008c9725] {\r\n          opacity: 0\n}\r\n"],sourceRoot:""}])},ZPmF:function(e,t,r){"use strict";var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("transition",{attrs:{name:"fade",mode:"in-out"}},[r("div",{staticClass:"userdetail"},[r("el-row",{staticClass:"bgrow"},[r("el-col",{staticClass:"brb",attrs:{span:10,offset:1}},[e._v("姓名")]),e._v(" "),r("el-col",{staticClass:"alig brb textpri",attrs:{span:11}},[e._v(e._s(e.name))])],1),e._v(" "),r("el-row",{staticClass:"bgrow"},[r("el-col",{staticClass:"brb",attrs:{span:10,offset:1}},[e._v("联系电话")]),e._v(" "),r("el-col",{staticClass:"alig brb textpri",attrs:{span:11}},[e._v(e._s(e.tel))])],1),e._v(" "),r("el-row",{staticClass:"bgrow"},[r("el-col",{staticClass:"brb",attrs:{span:10,offset:1}},[e._v("加入时间")]),e._v(" "),r("el-col",{staticClass:"alig brb textpri",attrs:{span:11}},[e._v(e._s(e.gettime))])],1),e._v(" "),r("el-row",{staticClass:"bgrow"},[r("el-col",{staticClass:"brb",attrs:{span:10,offset:1}},[e._v("我的游戏")]),e._v(" "),r("el-col",{staticClass:"alig brb textpri",attrs:{span:11}},[e._v(e._s(e.mygame))])],1),e._v(" "),r("el-row",{staticClass:"bgrow"},[r("el-col",{staticClass:"brb",attrs:{span:10,offset:1}},[e._v("我的地区")]),e._v(" "),r("el-col",{staticClass:"alig brb textpri",attrs:{span:11}},[e._v(e._s(e.myzoom))])],1)],1)])},o=[],n={render:a,staticRenderFns:o};t.a=n},nvIQ:function(e,t,r){"use strict";var a=String.prototype.replace,o=/%20/g;e.exports={default:"RFC3986",formatters:{RFC1738:function(e){return a.call(e,o,"+")},RFC3986:function(e){return e}},RFC1738:"RFC1738",RFC3986:"RFC3986"}},trOs:function(e,t,r){"use strict";var a=r("5Q3Q"),o=Object.prototype.hasOwnProperty,n={allowDots:!1,allowPrototypes:!1,arrayLimit:20,decoder:a.decode,delimiter:"&",depth:5,parameterLimit:1e3,plainObjects:!1,strictNullHandling:!1},i=function(e,t){for(var r={},a=t.ignoreQueryPrefix?e.replace(/^\?/,""):e,i=t.parameterLimit===1/0?void 0:t.parameterLimit,l=a.split(t.delimiter,i),c=0;c<l.length;++c){var s,d,f=l[c],u=f.indexOf("]="),p=-1===u?f.indexOf("="):u+1;-1===p?(s=t.decoder(f,n.decoder),d=t.strictNullHandling?null:""):(s=t.decoder(f.slice(0,p),n.decoder),d=t.decoder(f.slice(p+1),n.decoder)),o.call(r,s)?r[s]=[].concat(r[s]).concat(d):r[s]=d}return r},l=function(e,t,r){for(var a=t,o=e.length-1;o>=0;--o){var n,i=e[o];if("[]"===i)n=[],n=n.concat(a);else{n=r.plainObjects?Object.create(null):{};var l="["===i.charAt(0)&&"]"===i.charAt(i.length-1)?i.slice(1,-1):i,c=parseInt(l,10);!isNaN(c)&&i!==l&&String(c)===l&&c>=0&&r.parseArrays&&c<=r.arrayLimit?(n=[],n[c]=a):n[l]=a}a=n}return a},c=function(e,t,r){if(e){var a=r.allowDots?e.replace(/\.([^.[]+)/g,"[$1]"):e,n=/(\[[^[\]]*])/,i=/(\[[^[\]]*])/g,c=n.exec(a),s=c?a.slice(0,c.index):a,d=[];if(s){if(!r.plainObjects&&o.call(Object.prototype,s)&&!r.allowPrototypes)return;d.push(s)}for(var f=0;null!==(c=i.exec(a))&&f<r.depth;){if(f+=1,!r.plainObjects&&o.call(Object.prototype,c[1].slice(1,-1))&&!r.allowPrototypes)return;d.push(c[1])}return c&&d.push("["+a.slice(c.index)+"]"),l(d,t,r)}};e.exports=function(e,t){var r=t?a.assign({},t):{};if(null!==r.decoder&&void 0!==r.decoder&&"function"!=typeof r.decoder)throw new TypeError("Decoder has to be a function.");if(r.ignoreQueryPrefix=!0===r.ignoreQueryPrefix,r.delimiter="string"==typeof r.delimiter||a.isRegExp(r.delimiter)?r.delimiter:n.delimiter,r.depth="number"==typeof r.depth?r.depth:n.depth,r.arrayLimit="number"==typeof r.arrayLimit?r.arrayLimit:n.arrayLimit,r.parseArrays=!1!==r.parseArrays,r.decoder="function"==typeof r.decoder?r.decoder:n.decoder,r.allowDots="boolean"==typeof r.allowDots?r.allowDots:n.allowDots,r.plainObjects="boolean"==typeof r.plainObjects?r.plainObjects:n.plainObjects,r.allowPrototypes="boolean"==typeof r.allowPrototypes?r.allowPrototypes:n.allowPrototypes,r.parameterLimit="number"==typeof r.parameterLimit?r.parameterLimit:n.parameterLimit,r.strictNullHandling="boolean"==typeof r.strictNullHandling?r.strictNullHandling:n.strictNullHandling,""===e||null===e||void 0===e)return r.plainObjects?Object.create(null):{};for(var o="string"==typeof e?i(e,r):e,l=r.plainObjects?Object.create(null):{},s=Object.keys(o),d=0;d<s.length;++d){var f=s[d],u=c(f,o[f],r);l=a.merge(l,u,r)}return a.compact(l)}}});
//# sourceMappingURL=2.c8d56975ffe09ff97211.js.map