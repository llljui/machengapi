webpackJsonp([9],{"1IkZ":function(e,t,r){"use strict";var a=r("5Q3Q"),o=r("nvIQ"),n={brackets:function(e){return e+"[]"},indices:function(e,t){return e+"["+t+"]"},repeat:function(e){return e}},i=Date.prototype.toISOString,l={delimiter:"&",encode:!0,encoder:a.encode,encodeValuesOnly:!1,serializeDate:function(e){return i.call(e)},skipNulls:!1,strictNullHandling:!1},s=function e(t,r,o,n,i,s,c,d,u,p,f,g){var v=t;if("function"==typeof c)v=c(r,v);else if(v instanceof Date)v=p(v);else if(null===v){if(n)return s&&!g?s(r,l.encoder):r;v=""}if("string"==typeof v||"number"==typeof v||"boolean"==typeof v||a.isBuffer(v)){if(s){return[f(g?r:s(r,l.encoder))+"="+f(s(v,l.encoder))]}return[f(r)+"="+f(String(v))]}var h=[];if(void 0===v)return h;var m;if(Array.isArray(c))m=c;else{var A=Object.keys(v);m=d?A.sort(d):A}for(var b=0;b<m.length;++b){var y=m[b];i&&null===v[y]||(h=Array.isArray(v)?h.concat(e(v[y],o(r,y),o,n,i,s,c,d,u,p,f,g)):h.concat(e(v[y],r+(u?"."+y:"["+y+"]"),o,n,i,s,c,d,u,p,f,g)))}return h};e.exports=function(e,t){var r=e,i=t?a.assign({},t):{};if(null!==i.encoder&&void 0!==i.encoder&&"function"!=typeof i.encoder)throw new TypeError("Encoder has to be a function.");var c=void 0===i.delimiter?l.delimiter:i.delimiter,d="boolean"==typeof i.strictNullHandling?i.strictNullHandling:l.strictNullHandling,u="boolean"==typeof i.skipNulls?i.skipNulls:l.skipNulls,p="boolean"==typeof i.encode?i.encode:l.encode,f="function"==typeof i.encoder?i.encoder:l.encoder,g="function"==typeof i.sort?i.sort:null,v=void 0!==i.allowDots&&i.allowDots,h="function"==typeof i.serializeDate?i.serializeDate:l.serializeDate,m="boolean"==typeof i.encodeValuesOnly?i.encodeValuesOnly:l.encodeValuesOnly;if(void 0===i.format)i.format=o.default;else if(!Object.prototype.hasOwnProperty.call(o.formatters,i.format))throw new TypeError("Unknown format option provided.");var A,b,y=o.formatters[i.format];"function"==typeof i.filter?(b=i.filter,r=b("",r)):Array.isArray(i.filter)&&(b=i.filter,A=b);var w=[];if("object"!=typeof r||null===r)return"";var C;C=i.arrayFormat in n?i.arrayFormat:"indices"in i?i.indices?"indices":"repeat":"indices";var O=n[C];A||(A=Object.keys(r)),g&&A.sort(g);for(var B=0;B<A.length;++B){var j=A[B];u&&null===r[j]||(w=w.concat(s(r[j],j,O,d,u,p?f:null,b,g,v,h,y,m)))}var x=w.join(c),D=!0===i.addQueryPrefix?"?":"";return x.length>0?D+x:""}},"4gtA":function(e,t,r){"use strict";var a=r("BMa3"),o=r.n(a),n=r("DEjr"),i=r.n(n);t.a={name:"promoter",data:function(){return{tableData3:[],currentPage1:5,currentPage2:5,currentPage3:5,currentPage4:4,tabH:null,prouid:null,pormember:null,moreOrelse:null,loading:!1,pagesize:1,pagechose:1}},methods:{handleSizeChange:function(e){console.log("每页 "+e+" 条")},handleCurrentChange:function(e){console.log("当前页: "+e)},handleEdit:function(e,t){console.log(e,t);var r=this;sessionStorage.promoterid=t.uid,r.$router.push({path:"/promoterdetail"})},handleDelete:function(e,t){console.log(e,t)},searchinfo:function(){var e=this,t={uid:e.prouid,cid:sessionStorage.cid,channel:sessionStorage.channel,page:e.pagechose};o.a.post(sessionStorage.weburl+"/user/promoter/agent",i.a.stringify(t),{headers:{"Content-Type":"application/x-www-form-urlencoded"}}).then(function(t){console.log(t.data.data.list),e.tableData3=[],e.tableData3=t.data.data.list}).catch(function(e){console.log(e)})},searchinfo2:function(){var e=this,t={uid:e.prouid,cid:sessionStorage.cid,channel:sessionStorage.channel,page:e.pagechose};o.a.post(sessionStorage.weburl+"/user/promoter/agent",i.a.stringify(t),{headers:{"Content-Type":"application/x-www-form-urlencoded"}}).then(function(t){e.pagesize<t.data.data.total?e.moreOrelse="查看更多":e.moreOrelse="无更多数据",t.data.data.list.forEach(function(t,r){e.tableData3.push(t),console.log(t)})}).catch(function(e){console.log(e)})},lookmore:function(){var e=this;console.log(22),"无更多数据"==e.moreOrelse||(e.loading=!0,e.pagechose++,e.searchinfo2()),setTimeout(function(){e.loading=!1},1e3)}},computed:{tabheight:function(){var e=this,t=navigator.userAgent;console.log(window.screen.availHeight),-1!=t.indexOf("Nexus")?(console.log("Nexus"),e.tabH=window.screen.availHeight-500+560/window.screen.availHeight*250,console.log(e.tabH)):window.screen.availHeight<570?e.tabH="300":(e.tabH=window.screen.availHeight-500+560/window.screen.availHeight*270,console.log(t))}},mounted:function(){var e=this,t={cid:sessionStorage.cid,channel:sessionStorage.channel};o.a.post(sessionStorage.weburl+"/user/promoter/agent",i.a.stringify(t),{headers:{"Content-Type":"application/x-www-form-urlencoded"}}).then(function(t){console.log(t.data.data.number),e.tableData3=[],e.tableData3=t.data.data.list,e.pormember=t.data.data.number,e.pagesize<t.data.data.total?e.moreOrelse="查看更多":e.moreOrelse="无更多数据"}).catch(function(e){console.log(e)})}}},"5Q3Q":function(e,t,r){"use strict";var a=Object.prototype.hasOwnProperty,o=function(){for(var e=[],t=0;t<256;++t)e.push("%"+((t<16?"0":"")+t.toString(16)).toUpperCase());return e}(),n=function(e){for(var t;e.length;){var r=e.pop();if(t=r.obj[r.prop],Array.isArray(t)){for(var a=[],o=0;o<t.length;++o)void 0!==t[o]&&a.push(t[o]);r.obj[r.prop]=a}}return t};t.arrayToObject=function(e,t){for(var r=t&&t.plainObjects?Object.create(null):{},a=0;a<e.length;++a)void 0!==e[a]&&(r[a]=e[a]);return r},t.merge=function(e,r,o){if(!r)return e;if("object"!=typeof r){if(Array.isArray(e))e.push(r);else{if("object"!=typeof e)return[e,r];(o.plainObjects||o.allowPrototypes||!a.call(Object.prototype,r))&&(e[r]=!0)}return e}if("object"!=typeof e)return[e].concat(r);var n=e;return Array.isArray(e)&&!Array.isArray(r)&&(n=t.arrayToObject(e,o)),Array.isArray(e)&&Array.isArray(r)?(r.forEach(function(r,n){a.call(e,n)?e[n]&&"object"==typeof e[n]?e[n]=t.merge(e[n],r,o):e.push(r):e[n]=r}),e):Object.keys(r).reduce(function(e,n){var i=r[n];return a.call(e,n)?e[n]=t.merge(e[n],i,o):e[n]=i,e},n)},t.assign=function(e,t){return Object.keys(t).reduce(function(e,r){return e[r]=t[r],e},e)},t.decode=function(e){try{return decodeURIComponent(e.replace(/\+/g," "))}catch(t){return e}},t.encode=function(e){if(0===e.length)return e;for(var t="string"==typeof e?e:String(e),r="",a=0;a<t.length;++a){var n=t.charCodeAt(a);45===n||46===n||95===n||126===n||n>=48&&n<=57||n>=65&&n<=90||n>=97&&n<=122?r+=t.charAt(a):n<128?r+=o[n]:n<2048?r+=o[192|n>>6]+o[128|63&n]:n<55296||n>=57344?r+=o[224|n>>12]+o[128|n>>6&63]+o[128|63&n]:(a+=1,n=65536+((1023&n)<<10|1023&t.charCodeAt(a)),r+=o[240|n>>18]+o[128|n>>12&63]+o[128|n>>6&63]+o[128|63&n])}return r},t.compact=function(e){for(var t=[{obj:{o:e},prop:"o"}],r=[],a=0;a<t.length;++a)for(var o=t[a],i=o.obj[o.prop],l=Object.keys(i),s=0;s<l.length;++s){var c=l[s],d=i[c];"object"==typeof d&&null!==d&&-1===r.indexOf(d)&&(t.push({obj:i,prop:c}),r.push(d))}return n(t)},t.isRegExp=function(e){return"[object RegExp]"===Object.prototype.toString.call(e)},t.isBuffer=function(e){return null!==e&&void 0!==e&&!!(e.constructor&&e.constructor.isBuffer&&e.constructor.isBuffer(e))}},DEjr:function(e,t,r){"use strict";var a=r("1IkZ"),o=r("trOs"),n=r("nvIQ");e.exports={formats:n,parse:o,stringify:a}},HX20:function(e,t,r){t=e.exports=r("UTlt")(!0),t.push([e.i,".mrt[data-v-e98f52da]{margin-top:2vh}.searchbtn[data-v-e98f52da]{margin-top:2vh;color:#fff;text-align:center;border-radius:3px;margin-bottom:3vh}.block[data-v-e98f52da]{margin-top:3vh;float:right}.pagetab[data-v-e98f52da]{position:absolute;bottom:10vh}.tablesc[data-v-e98f52da]{width:100%}.fade-enter-active[data-v-e98f52da],.fade-leave-active[data-v-e98f52da]{-webkit-transition:opacity .5s;transition:opacity .5s}.fade-enter[data-v-e98f52da],.fade-leave-active[data-v-e98f52da]{opacity:0}.rts[data-v-e98f52da]{text-align:right;font-size:.7rem;position:absolute;top:2vh;right:5vw;padding-top:2%;color:#fff;line-height:4vh}.more[data-v-e98f52da]{text-align:center;cursor:pointer;color:#5e7382}.more[data-v-e98f52da]:active{color:#58b7ff}","",{version:3,sources:["F:/gameSystem/wxstage/machengapi/wxstage/src/page/promoter/promoter.vue"],names:[],mappings:"AACA,sBAAsB,cAAgB,CACrC,AACD,4BAA4B,eAAgB,WAAa,kBAAmB,kBAAmB,iBAAmB,CACjH,AACD,wBAAwB,eAAgB,WAAa,CACpD,AAID,0BAA0B,kBAAmB,WAAY,CACxD,AACD,0BAA0B,UAAY,CACrC,AACD,wEACU,+BAAgC,AAChC,sBAAuB,CAChC,AACD,iEACU,SAAU,CACnB,AACD,sBAAsB,iBAAkB,gBAAkB,kBAAmB,QAAS,UAAW,eAAgB,WAAa,eAAiB,CAC9I,AACD,uBAAuB,kBAAmB,eAAgB,aAAe,CACxE,AACD,8BAA8B,aAAe,CAC5C",file:"promoter.vue",sourcesContent:["\n.mrt[data-v-e98f52da]{margin-top: 2vh;\n}\n.searchbtn[data-v-e98f52da]{margin-top: 2vh;color: white;text-align: center;border-radius: 3px;margin-bottom: 3vh;\n}\n.block[data-v-e98f52da]{margin-top: 3vh;float: right;\n}\n.pagetab[data-v-e98f52da]{position: absolute;bottom:10vh;\n}\r\n/* .el-pagination{margin-left: -2vw;} */\n.pagetab[data-v-e98f52da]{position: absolute;bottom:10vh;\n}\n.tablesc[data-v-e98f52da]{width: 100%;\n}\n.fade-enter-active[data-v-e98f52da], .fade-leave-active[data-v-e98f52da] {\r\n          -webkit-transition: opacity .5s;\r\n          transition: opacity .5s\n}\n.fade-enter[data-v-e98f52da], .fade-leave-active[data-v-e98f52da] {\r\n          opacity: 0\n}\n.rts[data-v-e98f52da]{text-align: right;font-size: 0.7rem;position: absolute;top: 2vh;right: 5vw;padding-top: 2%;color: white;line-height: 4vh;\n}\n.more[data-v-e98f52da]{text-align: center;cursor: pointer;color: #5e7382;\n}\n.more[data-v-e98f52da]:active{color: #58B7FF;\n}\r\n"],sourceRoot:""}])},IJYD:function(e,t,r){"use strict";function a(e){r("mBZr")}Object.defineProperty(t,"__esModule",{value:!0});var o=r("4gtA"),n=r("sk+X"),i=r("Z0/y"),l=a,s=i(o.a,n.a,!1,l,"data-v-e98f52da",null);t.default=s.exports},mBZr:function(e,t,r){var a=r("HX20");"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);r("FIqI")("66176a80",a,!0,{})},nvIQ:function(e,t,r){"use strict";var a=String.prototype.replace,o=/%20/g;e.exports={default:"RFC3986",formatters:{RFC1738:function(e){return a.call(e,o,"+")},RFC3986:function(e){return e}},RFC1738:"RFC1738",RFC3986:"RFC3986"}},"sk+X":function(e,t,r){"use strict";var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("transition",{attrs:{name:"fade",mode:"in-out"}},[r("div",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],staticClass:"promoter"},[r("el-col",{staticClass:"mrt",attrs:{span:14,offset:1}},[r("el-input",{attrs:{placeholder:"请输入推广员ID"},model:{value:e.prouid,callback:function(t){e.prouid=t},expression:"prouid"}})],1),e._v(" "),r("el-col",{staticClass:"searchbtn",attrs:{span:7,offset:1}},[r("el-button",{staticStyle:{width:"100%"},attrs:{type:"primary"},on:{click:e.searchinfo}},[e._v("查询")])],1),e._v(" "),r("el-table",{key:e.tabheight,staticClass:"tabt",attrs:{align:"center",data:e.tableData3,height:e.tabH,border:""}},[r("el-table-column",{attrs:{prop:"uid",width:"120",align:"center",label:"推广员ID"}}),e._v(" "),r("el-table-column",{attrs:{prop:"nickname",align:"center",width:"100",sortable:"",label:"昵称"}}),e._v(" "),r("el-table-column",{attrs:{prop:"charge",align:"center",sortable:"",width:"120",label:"昨日充值"}}),e._v(" "),r("el-table-column",{attrs:{prop:"address",align:"center",label:"操作"},scopedSlots:e._u([{key:"default",fn:function(t){return[r("el-button",{attrs:{type:"primary",size:"small"},on:{click:function(r){e.handleEdit(t.$index,t.row)}}},[e._v("明细")])]}}])})],1),e._v(" "),r("div",{staticClass:"more",on:{click:e.lookmore}},[e._v(e._s(e.moreOrelse))]),e._v(" "),r("div",{staticClass:"rts"},[e._v("推广员列表:"+e._s(e.pormember))])],1)])},o=[],n={render:a,staticRenderFns:o};t.a=n},trOs:function(e,t,r){"use strict";var a=r("5Q3Q"),o=Object.prototype.hasOwnProperty,n={allowDots:!1,allowPrototypes:!1,arrayLimit:20,decoder:a.decode,delimiter:"&",depth:5,parameterLimit:1e3,plainObjects:!1,strictNullHandling:!1},i=function(e,t){for(var r={},a=t.ignoreQueryPrefix?e.replace(/^\?/,""):e,i=t.parameterLimit===1/0?void 0:t.parameterLimit,l=a.split(t.delimiter,i),s=0;s<l.length;++s){var c,d,u=l[s],p=u.indexOf("]="),f=-1===p?u.indexOf("="):p+1;-1===f?(c=t.decoder(u,n.decoder),d=t.strictNullHandling?null:""):(c=t.decoder(u.slice(0,f),n.decoder),d=t.decoder(u.slice(f+1),n.decoder)),o.call(r,c)?r[c]=[].concat(r[c]).concat(d):r[c]=d}return r},l=function(e,t,r){for(var a=t,o=e.length-1;o>=0;--o){var n,i=e[o];if("[]"===i)n=[],n=n.concat(a);else{n=r.plainObjects?Object.create(null):{};var l="["===i.charAt(0)&&"]"===i.charAt(i.length-1)?i.slice(1,-1):i,s=parseInt(l,10);!isNaN(s)&&i!==l&&String(s)===l&&s>=0&&r.parseArrays&&s<=r.arrayLimit?(n=[],n[s]=a):n[l]=a}a=n}return a},s=function(e,t,r){if(e){var a=r.allowDots?e.replace(/\.([^.[]+)/g,"[$1]"):e,n=/(\[[^[\]]*])/,i=/(\[[^[\]]*])/g,s=n.exec(a),c=s?a.slice(0,s.index):a,d=[];if(c){if(!r.plainObjects&&o.call(Object.prototype,c)&&!r.allowPrototypes)return;d.push(c)}for(var u=0;null!==(s=i.exec(a))&&u<r.depth;){if(u+=1,!r.plainObjects&&o.call(Object.prototype,s[1].slice(1,-1))&&!r.allowPrototypes)return;d.push(s[1])}return s&&d.push("["+a.slice(s.index)+"]"),l(d,t,r)}};e.exports=function(e,t){var r=t?a.assign({},t):{};if(null!==r.decoder&&void 0!==r.decoder&&"function"!=typeof r.decoder)throw new TypeError("Decoder has to be a function.");if(r.ignoreQueryPrefix=!0===r.ignoreQueryPrefix,r.delimiter="string"==typeof r.delimiter||a.isRegExp(r.delimiter)?r.delimiter:n.delimiter,r.depth="number"==typeof r.depth?r.depth:n.depth,r.arrayLimit="number"==typeof r.arrayLimit?r.arrayLimit:n.arrayLimit,r.parseArrays=!1!==r.parseArrays,r.decoder="function"==typeof r.decoder?r.decoder:n.decoder,r.allowDots="boolean"==typeof r.allowDots?r.allowDots:n.allowDots,r.plainObjects="boolean"==typeof r.plainObjects?r.plainObjects:n.plainObjects,r.allowPrototypes="boolean"==typeof r.allowPrototypes?r.allowPrototypes:n.allowPrototypes,r.parameterLimit="number"==typeof r.parameterLimit?r.parameterLimit:n.parameterLimit,r.strictNullHandling="boolean"==typeof r.strictNullHandling?r.strictNullHandling:n.strictNullHandling,""===e||null===e||void 0===e)return r.plainObjects?Object.create(null):{};for(var o="string"==typeof e?i(e,r):e,l=r.plainObjects?Object.create(null):{},c=Object.keys(o),d=0;d<c.length;++d){var u=c[d],p=s(u,o[u],r);l=a.merge(l,p,r)}return a.compact(l)}}});
//# sourceMappingURL=9.f98e5a73d28e298a4413.js.map