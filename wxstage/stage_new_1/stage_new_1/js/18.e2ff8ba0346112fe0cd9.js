webpackJsonp([18],{"1IkZ":function(e,t,r){"use strict";var o=r("5Q3Q"),n=r("nvIQ"),a={brackets:function(e){return e+"[]"},indices:function(e,t){return e+"["+t+"]"},repeat:function(e){return e}},i=Date.prototype.toISOString,c={delimiter:"&",encode:!0,encoder:o.encode,encodeValuesOnly:!1,serializeDate:function(e){return i.call(e)},skipNulls:!1,strictNullHandling:!1},s=function e(t,r,n,a,i,s,l,u,f,d,p,y){var g=t;if("function"==typeof l)g=l(r,g);else if(g instanceof Date)g=d(g);else if(null===g){if(a)return s&&!y?s(r,c.encoder):r;g=""}if("string"==typeof g||"number"==typeof g||"boolean"==typeof g||o.isBuffer(g)){if(s){return[p(y?r:s(r,c.encoder))+"="+p(s(g,c.encoder))]}return[p(r)+"="+p(String(g))]}var h=[];if(void 0===g)return h;var m;if(Array.isArray(l))m=l;else{var v=Object.keys(g);m=u?v.sort(u):v}for(var b=0;b<m.length;++b){var A=m[b];i&&null===g[A]||(h=Array.isArray(g)?h.concat(e(g[A],n(r,A),n,a,i,s,l,u,f,d,p,y)):h.concat(e(g[A],r+(f?"."+A:"["+A+"]"),n,a,i,s,l,u,f,d,p,y)))}return h};e.exports=function(e,t){var r=e,i=t?o.assign({},t):{};if(null!==i.encoder&&void 0!==i.encoder&&"function"!=typeof i.encoder)throw new TypeError("Encoder has to be a function.");var l=void 0===i.delimiter?c.delimiter:i.delimiter,u="boolean"==typeof i.strictNullHandling?i.strictNullHandling:c.strictNullHandling,f="boolean"==typeof i.skipNulls?i.skipNulls:c.skipNulls,d="boolean"==typeof i.encode?i.encode:c.encode,p="function"==typeof i.encoder?i.encoder:c.encoder,y="function"==typeof i.sort?i.sort:null,g=void 0!==i.allowDots&&i.allowDots,h="function"==typeof i.serializeDate?i.serializeDate:c.serializeDate,m="boolean"==typeof i.encodeValuesOnly?i.encodeValuesOnly:c.encodeValuesOnly;if(void 0===i.format)i.format=n.default;else if(!Object.prototype.hasOwnProperty.call(n.formatters,i.format))throw new TypeError("Unknown format option provided.");var v,b,A=n.formatters[i.format];"function"==typeof i.filter?(b=i.filter,r=b("",r)):Array.isArray(i.filter)&&(b=i.filter,v=b);var j=[];if("object"!=typeof r||null===r)return"";var w;w=i.arrayFormat in a?i.arrayFormat:"indices"in i?i.indices?"indices":"repeat":"indices";var O=a[w];v||(v=Object.keys(r)),y&&v.sort(y);for(var B=0;B<v.length;++B){var x=v[B];f&&null===r[x]||(j=j.concat(s(r[x],x,O,u,f,d?p:null,b,y,g,h,A,m)))}var C=j.join(l),k=!0===i.addQueryPrefix?"?":"";return C.length>0?k+C:""}},"5Q3Q":function(e,t,r){"use strict";var o=Object.prototype.hasOwnProperty,n=function(){for(var e=[],t=0;t<256;++t)e.push("%"+((t<16?"0":"")+t.toString(16)).toUpperCase());return e}(),a=function(e){for(var t;e.length;){var r=e.pop();if(t=r.obj[r.prop],Array.isArray(t)){for(var o=[],n=0;n<t.length;++n)void 0!==t[n]&&o.push(t[n]);r.obj[r.prop]=o}}return t};t.arrayToObject=function(e,t){for(var r=t&&t.plainObjects?Object.create(null):{},o=0;o<e.length;++o)void 0!==e[o]&&(r[o]=e[o]);return r},t.merge=function(e,r,n){if(!r)return e;if("object"!=typeof r){if(Array.isArray(e))e.push(r);else{if("object"!=typeof e)return[e,r];(n.plainObjects||n.allowPrototypes||!o.call(Object.prototype,r))&&(e[r]=!0)}return e}if("object"!=typeof e)return[e].concat(r);var a=e;return Array.isArray(e)&&!Array.isArray(r)&&(a=t.arrayToObject(e,n)),Array.isArray(e)&&Array.isArray(r)?(r.forEach(function(r,a){o.call(e,a)?e[a]&&"object"==typeof e[a]?e[a]=t.merge(e[a],r,n):e.push(r):e[a]=r}),e):Object.keys(r).reduce(function(e,a){var i=r[a];return o.call(e,a)?e[a]=t.merge(e[a],i,n):e[a]=i,e},a)},t.assign=function(e,t){return Object.keys(t).reduce(function(e,r){return e[r]=t[r],e},e)},t.decode=function(e){try{return decodeURIComponent(e.replace(/\+/g," "))}catch(t){return e}},t.encode=function(e){if(0===e.length)return e;for(var t="string"==typeof e?e:String(e),r="",o=0;o<t.length;++o){var a=t.charCodeAt(o);45===a||46===a||95===a||126===a||a>=48&&a<=57||a>=65&&a<=90||a>=97&&a<=122?r+=t.charAt(o):a<128?r+=n[a]:a<2048?r+=n[192|a>>6]+n[128|63&a]:a<55296||a>=57344?r+=n[224|a>>12]+n[128|a>>6&63]+n[128|63&a]:(o+=1,a=65536+((1023&a)<<10|1023&t.charCodeAt(o)),r+=n[240|a>>18]+n[128|a>>12&63]+n[128|a>>6&63]+n[128|63&a])}return r},t.compact=function(e){for(var t=[{obj:{o:e},prop:"o"}],r=[],o=0;o<t.length;++o)for(var n=t[o],i=n.obj[n.prop],c=Object.keys(i),s=0;s<c.length;++s){var l=c[s],u=i[l];"object"==typeof u&&null!==u&&-1===r.indexOf(u)&&(t.push({obj:i,prop:l}),r.push(u))}return a(t)},t.isRegExp=function(e){return"[object RegExp]"===Object.prototype.toString.call(e)},t.isBuffer=function(e){return null!==e&&void 0!==e&&!!(e.constructor&&e.constructor.isBuffer&&e.constructor.isBuffer(e))}},DEjr:function(e,t,r){"use strict";var o=r("1IkZ"),n=r("trOs"),a=r("nvIQ");e.exports={formats:a,parse:n,stringify:o}},KqVi:function(e,t,r){"use strict";var o=r("BMa3"),n=r.n(o),a=r("DEjr"),i=r.n(a);t.a={name:"authorize",data:function(){return{nickname:"--",uids:null}},methods:{promoter:function(){console.log(454);var e=this,t={uid:e.uids,cid:sessionStorage.cid,channel:sessionStorage.channel};n.a.post(sessionStorage.weburl+"/user/promoter/auth",i.a.stringify(t),{headers:{"Content-Type":"application/x-www-form-urlencoded"}}).then(function(t){0==t.data.code?e.$message({message:"授权成功",type:"success"}):e.$message({message:t.data.message,type:"warning"})}).catch(function(e){console.log(e)})},inputin:function(e){var t=this;console.log(e),t.uids=e},searchinfo:function(){var e=this;n.a.get(sessionStorage.weburl+"/user/check",{params:{uid:e.uids,cid:sessionStorage.cid,channel:sessionStorage.channel}}).then(function(t){0==t.data.code?e.nickname=t.data.data.nickname:e.nickname=t.data.message}).catch(function(e){console.log(e)})}}}},NrH8:function(e,t,r){t=e.exports=r("UTlt")(!0),t.push([e.i,".mrt[data-v-2d819fbd]{margin-top:2vh}.btnw[data-v-2d819fbd]{width:100%}.bgtext[data-v-2d819fbd]{background-color:#edf2f7;height:5vh;text-align:center;line-height:5vh;color:#324057;font-family:Times New Roman;border-radius:5px;font-weight:700;font-size:1rem}.sq[data-v-2d819fbd]{background-color:#20a0ff;color:#fff;text-align:center;height:7vh;line-height:7vh;border-radius:5px}.sq[data-v-2d819fbd]:active{background-color:#58b7ff}","",{version:3,sources:["F:/gameSystem/wxstage/machengapi/wxstage/src/page/authorize/authorize.vue"],names:[],mappings:"AACA,sBAAsB,cAAe,CACpC,AACD,uBAAuB,UAAY,CAClC,AACD,yBAAyB,yBAA0B,WAAY,kBAAmB,gBAAiB,cAAe,4BAA+B,kBAAmB,gBAAiB,cAAgB,CACpM,AACD,qBAAqB,yBAA0B,WAAa,kBAAmB,WAAY,gBAAiB,iBAAmB,CAC9H,AACD,4BAA4B,wBAA0B,CACrD",file:"authorize.vue",sourcesContent:['\n.mrt[data-v-2d819fbd]{margin-top:2vh;\n}\n.btnw[data-v-2d819fbd]{width: 100%;\n}\n.bgtext[data-v-2d819fbd]{background-color: #EdF2F7;height: 5vh;text-align: center;line-height: 5vh;color: #324057;font-family: "Times New Roman";border-radius: 5px;font-weight:bold;font-size: 1rem;\n}\n.sq[data-v-2d819fbd]{background-color: #20A0FF;color: white;text-align: center;height: 7vh;line-height: 7vh;border-radius: 5px;\n}\n.sq[data-v-2d819fbd]:active{background-color: #58B7FF;\n}\r\n'],sourceRoot:""}])},"VD8/":function(e,t,r){"use strict";function o(e){r("mMVp")}Object.defineProperty(t,"__esModule",{value:!0});var n=r("KqVi"),a=r("VL7F"),i=r("Z0/y"),c=o,s=i(n.a,a.a,!1,c,"data-v-2d819fbd",null);t.default=s.exports},VL7F:function(e,t,r){"use strict";var o=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"authorize"},[r("el-col",{attrs:{span:14,offset:1}},[r("el-input",{staticClass:"mrt",attrs:{placeholder:"输入推广员ID/邀请码",type:"number"},on:{change:e.inputin},model:{value:e.uids,callback:function(t){e.uids=t},expression:"uids"}})],1),e._v(" "),r("el-col",{attrs:{span:7,offset:1}},[r("el-button",{staticClass:"mrt btnw",attrs:{type:"primary"},on:{click:e.searchinfo}},[e._v("查询")])],1),e._v(" "),r("el-col",{staticClass:"bgtext mrt",attrs:{span:22,offset:1}},[e._v(e._s(e.nickname))]),e._v(" "),r("el-col",{staticClass:"sq mrt",attrs:{span:22,offset:1}},[r("div",{staticClass:"sq",on:{click:e.promoter}},[e._v("授权")])])],1)},n=[],a={render:o,staticRenderFns:n};t.a=a},mMVp:function(e,t,r){var o=r("NrH8");"string"==typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);r("FIqI")("c2d96f62",o,!0,{})},nvIQ:function(e,t,r){"use strict";var o=String.prototype.replace,n=/%20/g;e.exports={default:"RFC3986",formatters:{RFC1738:function(e){return o.call(e,n,"+")},RFC3986:function(e){return e}},RFC1738:"RFC1738",RFC3986:"RFC3986"}},trOs:function(e,t,r){"use strict";var o=r("5Q3Q"),n=Object.prototype.hasOwnProperty,a={allowDots:!1,allowPrototypes:!1,arrayLimit:20,decoder:o.decode,delimiter:"&",depth:5,parameterLimit:1e3,plainObjects:!1,strictNullHandling:!1},i=function(e,t){for(var r={},o=t.ignoreQueryPrefix?e.replace(/^\?/,""):e,i=t.parameterLimit===1/0?void 0:t.parameterLimit,c=o.split(t.delimiter,i),s=0;s<c.length;++s){var l,u,f=c[s],d=f.indexOf("]="),p=-1===d?f.indexOf("="):d+1;-1===p?(l=t.decoder(f,a.decoder),u=t.strictNullHandling?null:""):(l=t.decoder(f.slice(0,p),a.decoder),u=t.decoder(f.slice(p+1),a.decoder)),n.call(r,l)?r[l]=[].concat(r[l]).concat(u):r[l]=u}return r},c=function(e,t,r){for(var o=t,n=e.length-1;n>=0;--n){var a,i=e[n];if("[]"===i)a=[],a=a.concat(o);else{a=r.plainObjects?Object.create(null):{};var c="["===i.charAt(0)&&"]"===i.charAt(i.length-1)?i.slice(1,-1):i,s=parseInt(c,10);!isNaN(s)&&i!==c&&String(s)===c&&s>=0&&r.parseArrays&&s<=r.arrayLimit?(a=[],a[s]=o):a[c]=o}o=a}return o},s=function(e,t,r){if(e){var o=r.allowDots?e.replace(/\.([^.[]+)/g,"[$1]"):e,a=/(\[[^[\]]*])/,i=/(\[[^[\]]*])/g,s=a.exec(o),l=s?o.slice(0,s.index):o,u=[];if(l){if(!r.plainObjects&&n.call(Object.prototype,l)&&!r.allowPrototypes)return;u.push(l)}for(var f=0;null!==(s=i.exec(o))&&f<r.depth;){if(f+=1,!r.plainObjects&&n.call(Object.prototype,s[1].slice(1,-1))&&!r.allowPrototypes)return;u.push(s[1])}return s&&u.push("["+o.slice(s.index)+"]"),c(u,t,r)}};e.exports=function(e,t){var r=t?o.assign({},t):{};if(null!==r.decoder&&void 0!==r.decoder&&"function"!=typeof r.decoder)throw new TypeError("Decoder has to be a function.");if(r.ignoreQueryPrefix=!0===r.ignoreQueryPrefix,r.delimiter="string"==typeof r.delimiter||o.isRegExp(r.delimiter)?r.delimiter:a.delimiter,r.depth="number"==typeof r.depth?r.depth:a.depth,r.arrayLimit="number"==typeof r.arrayLimit?r.arrayLimit:a.arrayLimit,r.parseArrays=!1!==r.parseArrays,r.decoder="function"==typeof r.decoder?r.decoder:a.decoder,r.allowDots="boolean"==typeof r.allowDots?r.allowDots:a.allowDots,r.plainObjects="boolean"==typeof r.plainObjects?r.plainObjects:a.plainObjects,r.allowPrototypes="boolean"==typeof r.allowPrototypes?r.allowPrototypes:a.allowPrototypes,r.parameterLimit="number"==typeof r.parameterLimit?r.parameterLimit:a.parameterLimit,r.strictNullHandling="boolean"==typeof r.strictNullHandling?r.strictNullHandling:a.strictNullHandling,""===e||null===e||void 0===e)return r.plainObjects?Object.create(null):{};for(var n="string"==typeof e?i(e,r):e,c=r.plainObjects?Object.create(null):{},l=Object.keys(n),u=0;u<l.length;++u){var f=l[u],d=s(f,n[f],r);c=o.merge(c,d,r)}return o.compact(c)}}});
//# sourceMappingURL=18.e2ff8ba0346112fe0cd9.js.map