webpackJsonp([6],{"1IkZ":function(e,t,r){"use strict";var a=r("5Q3Q"),o=r("nvIQ"),n={brackets:function(e){return e+"[]"},indices:function(e,t){return e+"["+t+"]"},repeat:function(e){return e}},i=Date.prototype.toISOString,c={delimiter:"&",encode:!0,encoder:a.encode,encodeValuesOnly:!1,serializeDate:function(e){return i.call(e)},skipNulls:!1,strictNullHandling:!1},s=function e(t,r,o,n,i,s,l,d,f,p,u,A){var v=t;if("function"==typeof l)v=l(r,v);else if(v instanceof Date)v=p(v);else if(null===v){if(n)return s&&!A?s(r,c.encoder):r;v=""}if("string"==typeof v||"number"==typeof v||"boolean"==typeof v||a.isBuffer(v)){if(s){return[u(A?r:s(r,c.encoder))+"="+u(s(v,c.encoder))]}return[u(r)+"="+u(String(v))]}var h=[];if(void 0===v)return h;var g;if(Array.isArray(l))g=l;else{var m=Object.keys(v);g=d?m.sort(d):m}for(var y=0;y<g.length;++y){var b=g[y];i&&null===v[b]||(h=Array.isArray(v)?h.concat(e(v[b],o(r,b),o,n,i,s,l,d,f,p,u,A)):h.concat(e(v[b],r+(f?"."+b:"["+b+"]"),o,n,i,s,l,d,f,p,u,A)))}return h};e.exports=function(e,t){var r=e,i=t?a.assign({},t):{};if(null!==i.encoder&&void 0!==i.encoder&&"function"!=typeof i.encoder)throw new TypeError("Encoder has to be a function.");var l=void 0===i.delimiter?c.delimiter:i.delimiter,d="boolean"==typeof i.strictNullHandling?i.strictNullHandling:c.strictNullHandling,f="boolean"==typeof i.skipNulls?i.skipNulls:c.skipNulls,p="boolean"==typeof i.encode?i.encode:c.encode,u="function"==typeof i.encoder?i.encoder:c.encoder,A="function"==typeof i.sort?i.sort:null,v=void 0!==i.allowDots&&i.allowDots,h="function"==typeof i.serializeDate?i.serializeDate:c.serializeDate,g="boolean"==typeof i.encodeValuesOnly?i.encodeValuesOnly:c.encodeValuesOnly;if(void 0===i.format)i.format=o.default;else if(!Object.prototype.hasOwnProperty.call(o.formatters,i.format))throw new TypeError("Unknown format option provided.");var m,y,b=o.formatters[i.format];"function"==typeof i.filter?(y=i.filter,r=y("",r)):Array.isArray(i.filter)&&(y=i.filter,m=y);var C=[];if("object"!=typeof r||null===r)return"";var w;w=i.arrayFormat in n?i.arrayFormat:"indices"in i?i.indices?"indices":"repeat":"indices";var B=n[w];m||(m=Object.keys(r)),A&&m.sort(A);for(var j=0;j<m.length;++j){var x=m[j];f&&null===r[x]||(C=C.concat(s(r[x],x,B,d,f,p?u:null,y,A,v,h,b,g)))}var k=C.join(l),O=!0===i.addQueryPrefix?"?":"";return k.length>0?O+k:""}},"5Q3Q":function(e,t,r){"use strict";var a=Object.prototype.hasOwnProperty,o=function(){for(var e=[],t=0;t<256;++t)e.push("%"+((t<16?"0":"")+t.toString(16)).toUpperCase());return e}(),n=function(e){for(var t;e.length;){var r=e.pop();if(t=r.obj[r.prop],Array.isArray(t)){for(var a=[],o=0;o<t.length;++o)void 0!==t[o]&&a.push(t[o]);r.obj[r.prop]=a}}return t};t.arrayToObject=function(e,t){for(var r=t&&t.plainObjects?Object.create(null):{},a=0;a<e.length;++a)void 0!==e[a]&&(r[a]=e[a]);return r},t.merge=function(e,r,o){if(!r)return e;if("object"!=typeof r){if(Array.isArray(e))e.push(r);else{if("object"!=typeof e)return[e,r];(o.plainObjects||o.allowPrototypes||!a.call(Object.prototype,r))&&(e[r]=!0)}return e}if("object"!=typeof e)return[e].concat(r);var n=e;return Array.isArray(e)&&!Array.isArray(r)&&(n=t.arrayToObject(e,o)),Array.isArray(e)&&Array.isArray(r)?(r.forEach(function(r,n){a.call(e,n)?e[n]&&"object"==typeof e[n]?e[n]=t.merge(e[n],r,o):e.push(r):e[n]=r}),e):Object.keys(r).reduce(function(e,n){var i=r[n];return a.call(e,n)?e[n]=t.merge(e[n],i,o):e[n]=i,e},n)},t.assign=function(e,t){return Object.keys(t).reduce(function(e,r){return e[r]=t[r],e},e)},t.decode=function(e){try{return decodeURIComponent(e.replace(/\+/g," "))}catch(t){return e}},t.encode=function(e){if(0===e.length)return e;for(var t="string"==typeof e?e:String(e),r="",a=0;a<t.length;++a){var n=t.charCodeAt(a);45===n||46===n||95===n||126===n||n>=48&&n<=57||n>=65&&n<=90||n>=97&&n<=122?r+=t.charAt(a):n<128?r+=o[n]:n<2048?r+=o[192|n>>6]+o[128|63&n]:n<55296||n>=57344?r+=o[224|n>>12]+o[128|n>>6&63]+o[128|63&n]:(a+=1,n=65536+((1023&n)<<10|1023&t.charCodeAt(a)),r+=o[240|n>>18]+o[128|n>>12&63]+o[128|n>>6&63]+o[128|63&n])}return r},t.compact=function(e){for(var t=[{obj:{o:e},prop:"o"}],r=[],a=0;a<t.length;++a)for(var o=t[a],i=o.obj[o.prop],c=Object.keys(i),s=0;s<c.length;++s){var l=c[s],d=i[l];"object"==typeof d&&null!==d&&-1===r.indexOf(d)&&(t.push({obj:i,prop:l}),r.push(d))}return n(t)},t.isRegExp=function(e){return"[object RegExp]"===Object.prototype.toString.call(e)},t.isBuffer=function(e){return null!==e&&void 0!==e&&!!(e.constructor&&e.constructor.isBuffer&&e.constructor.isBuffer(e))}},DEjr:function(e,t,r){"use strict";var a=r("1IkZ"),o=r("trOs"),n=r("nvIQ");e.exports={formats:n,parse:o,stringify:a}},Eh0L:function(e,t,r){"use strict";var a=r("BMa3"),o=r.n(a),n=r("DEjr"),i=r.n(n);t.a={name:"smrz",data:function(){return{kefu:null,info:!0,username:null,idcard:null,tell:null,imageUrl1:"",imageUrl2:"",private1:null,private2:null}},methods:{info_sure:function(){this.info=!1},checkname:function(e){if(!e)return this.$message({message:"请检查输入姓名",type:"warning"}),!1;console.log(e)},isCardNo:function(e){if(!1===/(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/.test(e))return this.$message({message:"身份输入不合法",type:"warning"}),!1},checkMobile:function(e){if(!/^1[3|4|5|8|7][0-9]\d{4,8}$/.test(e))return this.$message({message:"手机输入不合法",type:"warning"}),!1},handleAvatarSuccess1:function(e,t){this.imageUrl1=URL.createObjectURL(t.raw),console.log(e)},handleAvatarSuccess2:function(e,t){this.imageUrl2=URL.createObjectURL(t.raw),console.log(e+""+t)},beforeAvatarUpload1:function(e){var t=this;console.log(1);var r="image/jpeg"===e.type,a=e.size/1024/1024<8,n=new FileReader;return n.readAsDataURL(e),r||this.$message.error("上传图片只能是 JPG 格式!"),a||this.$message.error("上传图片大小不能超过 8MB!"),n.onload=function(e){this.result,console.log(this.result);var r={file:this.result};o.a.post("http://pay.queyoujia.com/public/upload",i.a.stringify(r),{headers:{"Content-Type":"application/x-www-form-urlencoded"}}).then(function(e){t.private1=e.data.data.key,console.log(e.data.data.key)}).catch(function(e){console.log(e)})},r&&a},beforeAvatarUpload2:function(e){var t=this,r="image/jpeg"===e.type,a=e.size/1024/1024<8,n=new FileReader;return n.readAsDataURL(e),r||this.$message.error("上传图片只能是 JPG 格式!"),a||this.$message.error("上传图片大小不能超过 8MB!"),n.onload=function(e){this.result,console.log(this.result);var r={file:this.result};o.a.post("http://pay.queyoujia.com/public/upload",i.a.stringify(r),{headers:{"Content-Type":"application/x-www-form-urlencoded"}}).then(function(e){t.private2=e.data.data.key,console.log(e.data.data.key)}).catch(function(e){console.log(e)})},r&&a},submit:function(){var e=this;e.isCardNo(e.idcard),e.checkMobile(e.tell),e.checkname(e.username);var t,r=new RegExp("(^| )openid=([^;]*)(;|$)");t=document.cookie.match(r);var a={openid:t[2],name:e.username,mobile:e.tell,idCard:e.idcard,cid:sessionStorage.cid,channel:sessionStorage.channel};o.a.post("http://pay.queyoujia.com/user/realname/verify",i.a.stringify(a),{headers:{"Content-Type":"application/x-www-form-urlencoded"}}).then(function(t){1102==t.data.code?(e.$message({message:t.data.message,type:"success"}),setTimeout(function(){e.$router.push({path:"/jstc"})},2e3)):(e.$message({message:t.data.message,type:"warning"}),console.log(t.data.message),console.log(t.data.code))}).catch(function(e){console.log(e)})}},mounted:function(){this.kefu=sessionStorage.kefu}}},KRXT:function(e,t,r){t=e.exports=r("BkJT")(!0),t.push([e.i,".info_btn[data-v-efe48acc]{width:80vw;position:absolute;bottom:2vh;left:5vw}.bor[data-v-efe48acc]{top:0;width:100vw;height:100vh;background-color:#000;opacity:.65}.bor[data-v-efe48acc],.info_[data-v-efe48acc]{position:fixed;left:0;right:0;bottom:0;margin:auto}.info_[data-v-efe48acc]{top:-10vh;width:90vw;height:50vh;background-color:#fff;border-radius:5px}.mrt[data-v-efe48acc]{margin-top:2vh}.fade-enter-active[data-v-efe48acc],.fade-leave-active[data-v-efe48acc]{-webkit-transition:opacity .5s;transition:opacity .5s}.fade-enter[data-v-efe48acc],.fade-leave-active[data-v-efe48acc]{opacity:0}.avatar-uploader .el-upload[data-v-efe48acc]{border:1px dashed #d9d9d9;border-radius:6px;cursor:pointer;position:relative;overflow:hidden}.avatar-uploader .el-upload[data-v-efe48acc]:hover{border-color:#409eff}.avatar-uploader-icon[data-v-efe48acc]{font-size:28px;color:#8c939d;width:20vw;height:20vh;line-height:20vh;text-align:center}.avatar[data-v-efe48acc]{width:30vw;height:15vh;display:block;margin-top:5vh}.btn[data-v-efe48acc]{width:100%;margin-top:5vh}.tip[data-v-efe48acc]{text-align:center;font-size:1rem;font-weight:700;margin-top:1vh}.p_tip[data-v-efe48acc]{padding:0 4vw;margin-top:7vh}","",{version:3,sources:["C:/Users/pc/Desktop/wxstage/wxstage/src/page/smrz/smrz.vue"],names:[],mappings:"AACA,2BAA2B,WAAY,kBAAmB,WAAY,QAAU,CAC/E,AACD,sBAAsC,MAAS,AAAuC,YAAa,aAAc,sBAAwB,WAAc,CACtJ,AACD,8CAFsB,eAAgB,AAAS,OAAQ,QAAS,SAAU,WAAY,CAGrF,AADD,wBAAwC,UAAW,AAAuC,WAAY,YAAa,sBAAwB,iBAAmB,CAC7J,AACD,sBAAsB,cAAgB,CACrC,AACD,wEACU,+BAAgC,AAChC,sBAAuB,CAChC,AACD,iEACU,SAAU,CACnB,AACD,6CACI,0BAA2B,AAC3B,kBAAmB,AACnB,eAAgB,AAChB,kBAAmB,AACnB,eAAiB,CACpB,AACD,mDACI,oBAAsB,CACzB,AACD,uCACI,eAAgB,AAChB,cAAe,AACf,WAAY,AACZ,YAAa,AACb,iBAAkB,AAClB,iBAAmB,CACtB,AACD,yBACI,WAAY,AACZ,YAAa,AACb,cAAe,AACf,cAAe,CAClB,AACD,sBAAsB,WAAW,cAAe,CAC/C,AACD,sBAAsB,kBAAmB,eAAe,gBAAkB,cAAe,CACxF,AACD,wBAAwB,cAAc,cAAe,CACpD",file:"smrz.vue",sourcesContent:["\n.info_btn[data-v-efe48acc]{width: 80vw;position: absolute;bottom: 2vh;left: 5vw;\n}\n.bor[data-v-efe48acc]{position: fixed;top: 0vh;left: 0;right: 0;bottom: 0;margin:auto;width: 100vw;height: 100vh;background-color: black;opacity: 0.65;\n}\n.info_[data-v-efe48acc]{position: fixed;top: -10vh;left: 0;right: 0;bottom: 0;margin:auto;width: 90vw;height: 50vh;background-color: white;border-radius: 5px;\n}\n.mrt[data-v-efe48acc]{margin-top: 2vh;\n}\n.fade-enter-active[data-v-efe48acc], .fade-leave-active[data-v-efe48acc] {\r\n          -webkit-transition: opacity .5s;\r\n          transition: opacity .5s\n}\n.fade-enter[data-v-efe48acc], .fade-leave-active[data-v-efe48acc] {\r\n          opacity: 0\n}\n.avatar-uploader .el-upload[data-v-efe48acc] {\r\n    border: 1px dashed #d9d9d9;\r\n    border-radius: 6px;\r\n    cursor: pointer;\r\n    position: relative;\r\n    overflow: hidden;\n}\n.avatar-uploader .el-upload[data-v-efe48acc]:hover {\r\n    border-color: #409EFF;\n}\n.avatar-uploader-icon[data-v-efe48acc] {\r\n    font-size: 28px;\r\n    color: #8c939d;\r\n    width: 20vw;\r\n    height: 20vh;\r\n    line-height: 20vh;\r\n    text-align: center;\n}\n.avatar[data-v-efe48acc] {\r\n    width: 30vw;\r\n    height: 15vh;\r\n    display: block;\r\n    margin-top: 5vh\n}\n.btn[data-v-efe48acc]{width:100%;margin-top: 5vh\n}\n.tip[data-v-efe48acc]{text-align: center;font-size:1rem;font-weight: bold;margin-top: 1vh\n}\n.p_tip[data-v-efe48acc]{padding:0 4vw;margin-top: 7vh\n}\r\n"],sourceRoot:""}])},Tp2w:function(e,t,r){"use strict";function a(e){r("poSc")}Object.defineProperty(t,"__esModule",{value:!0});var o=r("Eh0L"),n=r("l7LQ"),i=r("46Yf"),c=a,s=i(o.a,n.a,!1,c,"data-v-efe48acc",null);t.default=s.exports},l7LQ:function(e,t,r){"use strict";var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("transition",{attrs:{name:"fade",mode:"in-out"}},[r("div",{staticClass:"smrz"},[r("el-col",{attrs:{span:22,offset:1}},[r("el-input",{staticClass:"mrt",attrs:{type:"text",placeholder:"请输入真实姓名"},model:{value:e.username,callback:function(t){e.username=t},expression:"username"}})],1),e._v(" "),r("el-col",{attrs:{span:22,offset:1}},[r("el-input",{staticClass:"mrt",attrs:{type:"text",placeholder:"请输入手机号"},model:{value:e.tell,callback:function(t){e.tell=t},expression:"tell"}})],1),e._v(" "),r("el-col",{attrs:{span:22,offset:1}},[r("el-input",{staticClass:"mrt",attrs:{type:"text",placeholder:"请输入身份证号码"},model:{value:e.idcard,callback:function(t){e.idcard=t},expression:"idcard"}})],1),e._v(" "),r("el-col",{staticClass:"search mrt",attrs:{span:22,offset:1}},[r("el-button",{staticClass:"btn",attrs:{type:"primary"},on:{click:e.submit}},[e._v("提交")])],1),e._v(" "),r("div",{directives:[{name:"show",rawName:"v-show",value:e.info,expression:"info"}]},[r("div",{staticClass:"bor"}),e._v(" "),r("div",{staticClass:"info_"},[r("el-col",{staticClass:"tip",attrs:{span:24}},[e._v("温馨提示")]),e._v(" "),r("p",{staticClass:"p_tip"},[e._v("请务必保证填写的个人姓名和手机号真实有效，并且跟当前所在微信的实名认证信息一致，否则将可能出现打款不到账的情况。"),r("br"),e._v("有更多问题请联系我们的官方微信客服："+e._s(e.kefu))]),e._v(" "),r("el-button",{staticClass:"info_btn",attrs:{type:"primary"},on:{click:e.info_sure}},[e._v("确认")])],1)])],1)])},o=[],n={render:a,staticRenderFns:o};t.a=n},nvIQ:function(e,t,r){"use strict";var a=String.prototype.replace,o=/%20/g;e.exports={default:"RFC3986",formatters:{RFC1738:function(e){return a.call(e,o,"+")},RFC3986:function(e){return e}},RFC1738:"RFC1738",RFC3986:"RFC3986"}},poSc:function(e,t,r){var a=r("KRXT");"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);r("8bSs")("1b68658f",a,!0)},trOs:function(e,t,r){"use strict";var a=r("5Q3Q"),o=Object.prototype.hasOwnProperty,n={allowDots:!1,allowPrototypes:!1,arrayLimit:20,decoder:a.decode,delimiter:"&",depth:5,parameterLimit:1e3,plainObjects:!1,strictNullHandling:!1},i=function(e,t){for(var r={},a=t.ignoreQueryPrefix?e.replace(/^\?/,""):e,i=t.parameterLimit===1/0?void 0:t.parameterLimit,c=a.split(t.delimiter,i),s=0;s<c.length;++s){var l,d,f=c[s],p=f.indexOf("]="),u=-1===p?f.indexOf("="):p+1;-1===u?(l=t.decoder(f,n.decoder),d=t.strictNullHandling?null:""):(l=t.decoder(f.slice(0,u),n.decoder),d=t.decoder(f.slice(u+1),n.decoder)),o.call(r,l)?r[l]=[].concat(r[l]).concat(d):r[l]=d}return r},c=function(e,t,r){for(var a=t,o=e.length-1;o>=0;--o){var n,i=e[o];if("[]"===i)n=[],n=n.concat(a);else{n=r.plainObjects?Object.create(null):{};var c="["===i.charAt(0)&&"]"===i.charAt(i.length-1)?i.slice(1,-1):i,s=parseInt(c,10);!isNaN(s)&&i!==c&&String(s)===c&&s>=0&&r.parseArrays&&s<=r.arrayLimit?(n=[],n[s]=a):n[c]=a}a=n}return a},s=function(e,t,r){if(e){var a=r.allowDots?e.replace(/\.([^.[]+)/g,"[$1]"):e,n=/(\[[^[\]]*])/,i=/(\[[^[\]]*])/g,s=n.exec(a),l=s?a.slice(0,s.index):a,d=[];if(l){if(!r.plainObjects&&o.call(Object.prototype,l)&&!r.allowPrototypes)return;d.push(l)}for(var f=0;null!==(s=i.exec(a))&&f<r.depth;){if(f+=1,!r.plainObjects&&o.call(Object.prototype,s[1].slice(1,-1))&&!r.allowPrototypes)return;d.push(s[1])}return s&&d.push("["+a.slice(s.index)+"]"),c(d,t,r)}};e.exports=function(e,t){var r=t?a.assign({},t):{};if(null!==r.decoder&&void 0!==r.decoder&&"function"!=typeof r.decoder)throw new TypeError("Decoder has to be a function.");if(r.ignoreQueryPrefix=!0===r.ignoreQueryPrefix,r.delimiter="string"==typeof r.delimiter||a.isRegExp(r.delimiter)?r.delimiter:n.delimiter,r.depth="number"==typeof r.depth?r.depth:n.depth,r.arrayLimit="number"==typeof r.arrayLimit?r.arrayLimit:n.arrayLimit,r.parseArrays=!1!==r.parseArrays,r.decoder="function"==typeof r.decoder?r.decoder:n.decoder,r.allowDots="boolean"==typeof r.allowDots?r.allowDots:n.allowDots,r.plainObjects="boolean"==typeof r.plainObjects?r.plainObjects:n.plainObjects,r.allowPrototypes="boolean"==typeof r.allowPrototypes?r.allowPrototypes:n.allowPrototypes,r.parameterLimit="number"==typeof r.parameterLimit?r.parameterLimit:n.parameterLimit,r.strictNullHandling="boolean"==typeof r.strictNullHandling?r.strictNullHandling:n.strictNullHandling,""===e||null===e||void 0===e)return r.plainObjects?Object.create(null):{};for(var o="string"==typeof e?i(e,r):e,c=r.plainObjects?Object.create(null):{},l=Object.keys(o),d=0;d<l.length;++d){var f=l[d],p=s(f,o[f],r);c=a.merge(c,p,r)}return a.compact(c)}}});
//# sourceMappingURL=6.dda5445f50b89e9ebdd1.js.map