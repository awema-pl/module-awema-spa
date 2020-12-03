/**
 * Bundle of AWEMA awema-spa
 * Generated: 2020-12-04 00:43:06
 * Version: 1.0.3
 */

!function(){"use strict";function e(e){let t=window.location,r=(t.origin,t.pathname,e&&e.getAttribute("href"));return-1===e.className.indexOf("awema-spa-ignore")&&"_blank"!==e.target&&!!r&&"#"!==r[0]&&0===e.href.indexOf(t.origin)&&!e.hasAttribute("download")}var t={loading:3e3,timeout:3e4};"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self&&self;var r,n=(function(e,t){e.exports=function(e){function t(n){if(r[n])return r[n].exports;var o=r[n]={exports:{},id:n,loaded:!1};return e[n].call(o.exports,o,o.exports,t),o.loaded=!0,o.exports}var r={};return t.m=e,t.c=r,t.p="",t(0)}([function(e,t,r){e.exports=r(1)},function(e,t,r){function n(e){var t=new i(e),r=s(i.prototype.request,t);return o.extend(r,i.prototype,t),o.extend(r,t),r}var o=r(2),s=r(3),i=r(4),a=r(22),u=r(10),c=n(u);c.Axios=i,c.create=function(e){return n(a(c.defaults,e))},c.Cancel=r(23),c.CancelToken=r(24),c.isCancel=r(9),c.all=function(e){return Promise.all(e)},c.spread=r(25),e.exports=c,e.exports.default=c},function(e,t,r){function n(e){return"[object Array]"===f.call(e)}function o(e){return void 0===e}function s(e){return null!==e&&"object"==typeof e}function i(e){if("[object Object]"!==f.call(e))return!1;var t=Object.getPrototypeOf(e);return null===t||t===Object.prototype}function a(e){return"[object Function]"===f.call(e)}function u(e,t){if(null!=e)if("object"!=typeof e&&(e=[e]),n(e))for(var r=0,o=e.length;r<o;r++)t.call(null,e[r],r,e);else for(var s in e)Object.prototype.hasOwnProperty.call(e,s)&&t.call(null,e[s],s,e)}var c=r(3),f=Object.prototype.toString;e.exports={isArray:n,isArrayBuffer:function(e){return"[object ArrayBuffer]"===f.call(e)},isBuffer:function(e){return null!==e&&!o(e)&&null!==e.constructor&&!o(e.constructor)&&"function"==typeof e.constructor.isBuffer&&e.constructor.isBuffer(e)},isFormData:function(e){return"undefined"!=typeof FormData&&e instanceof FormData},isArrayBufferView:function(e){return"undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&e.buffer instanceof ArrayBuffer},isString:function(e){return"string"==typeof e},isNumber:function(e){return"number"==typeof e},isObject:s,isPlainObject:i,isUndefined:o,isDate:function(e){return"[object Date]"===f.call(e)},isFile:function(e){return"[object File]"===f.call(e)},isBlob:function(e){return"[object Blob]"===f.call(e)},isFunction:a,isStream:function(e){return s(e)&&a(e.pipe)},isURLSearchParams:function(e){return"undefined"!=typeof URLSearchParams&&e instanceof URLSearchParams},isStandardBrowserEnv:function(){return("undefined"==typeof navigator||"ReactNative"!==navigator.product&&"NativeScript"!==navigator.product&&"NS"!==navigator.product)&&"undefined"!=typeof window&&"undefined"!=typeof document},forEach:u,merge:function e(){function t(t,o){i(r[o])&&i(t)?r[o]=e(r[o],t):i(t)?r[o]=e({},t):n(t)?r[o]=t.slice():r[o]=t}for(var r={},o=0,s=arguments.length;o<s;o++)u(arguments[o],t);return r},extend:function(e,t,r){return u(t,function(t,n){e[n]=r&&"function"==typeof t?c(t,r):t}),e},trim:function(e){return e.replace(/^\s*/,"").replace(/\s*$/,"")},stripBOM:function(e){return 65279===e.charCodeAt(0)&&(e=e.slice(1)),e}}},function(e,t){e.exports=function(e,t){return function(){for(var r=new Array(arguments.length),n=0;n<r.length;n++)r[n]=arguments[n];return e.apply(t,r)}}},function(e,t,r){function n(e){this.defaults=e,this.interceptors={request:new i,response:new i}}var o=r(2),s=r(5),i=r(6),a=r(7),u=r(22);n.prototype.request=function(e){"string"==typeof e?(e=arguments[1]||{}).url=arguments[0]:e=e||{},(e=u(this.defaults,e)).method?e.method=e.method.toLowerCase():this.defaults.method?e.method=this.defaults.method.toLowerCase():e.method="get";var t=[a,void 0],r=Promise.resolve(e);for(this.interceptors.request.forEach(function(e){t.unshift(e.fulfilled,e.rejected)}),this.interceptors.response.forEach(function(e){t.push(e.fulfilled,e.rejected)});t.length;)r=r.then(t.shift(),t.shift());return r},n.prototype.getUri=function(e){return e=u(this.defaults,e),s(e.url,e.params,e.paramsSerializer).replace(/^\?/,"")},o.forEach(["delete","get","head","options"],function(e){n.prototype[e]=function(t,r){return this.request(u(r||{},{method:e,url:t,data:(r||{}).data}))}}),o.forEach(["post","put","patch"],function(e){n.prototype[e]=function(t,r,n){return this.request(u(n||{},{method:e,url:t,data:r}))}}),e.exports=n},function(e,t,r){function n(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}var o=r(2);e.exports=function(e,t,r){if(!t)return e;var s;if(r)s=r(t);else if(o.isURLSearchParams(t))s=t.toString();else{var i=[];o.forEach(t,function(e,t){null!=e&&(o.isArray(e)?t+="[]":e=[e],o.forEach(e,function(e){o.isDate(e)?e=e.toISOString():o.isObject(e)&&(e=JSON.stringify(e)),i.push(n(t)+"="+n(e))}))}),s=i.join("&")}if(s){var a=e.indexOf("#");-1!==a&&(e=e.slice(0,a)),e+=(-1===e.indexOf("?")?"?":"&")+s}return e}},function(e,t,r){function n(){this.handlers=[]}var o=r(2);n.prototype.use=function(e,t){return this.handlers.push({fulfilled:e,rejected:t}),this.handlers.length-1},n.prototype.eject=function(e){this.handlers[e]&&(this.handlers[e]=null)},n.prototype.forEach=function(e){o.forEach(this.handlers,function(t){null!==t&&e(t)})},e.exports=n},function(e,t,r){function n(e){e.cancelToken&&e.cancelToken.throwIfRequested()}var o=r(2),s=r(8),i=r(9),a=r(10);e.exports=function(e){n(e),e.headers=e.headers||{},e.data=s(e.data,e.headers,e.transformRequest),e.headers=o.merge(e.headers.common||{},e.headers[e.method]||{},e.headers),o.forEach(["delete","get","head","post","put","patch","common"],function(t){delete e.headers[t]});var t=e.adapter||a.adapter;return t(e).then(function(t){return n(e),t.data=s(t.data,t.headers,e.transformResponse),t},function(t){return i(t)||(n(e),t&&t.response&&(t.response.data=s(t.response.data,t.response.headers,e.transformResponse))),Promise.reject(t)})}},function(e,t,r){var n=r(2);e.exports=function(e,t,r){return n.forEach(r,function(r){e=r(e,t)}),e}},function(e,t){e.exports=function(e){return!(!e||!e.__CANCEL__)}},function(e,t,r){function n(e,t){!o.isUndefined(e)&&o.isUndefined(e["Content-Type"])&&(e["Content-Type"]=t)}var o=r(2),s=r(11),i={"Content-Type":"application/x-www-form-urlencoded"},a={adapter:function(){var e;return"undefined"!=typeof XMLHttpRequest?e=r(12):"undefined"!=typeof process&&"[object process]"===Object.prototype.toString.call(process)&&(e=r(12)),e}(),transformRequest:[function(e,t){return s(t,"Accept"),s(t,"Content-Type"),o.isFormData(e)||o.isArrayBuffer(e)||o.isBuffer(e)||o.isStream(e)||o.isFile(e)||o.isBlob(e)?e:o.isArrayBufferView(e)?e.buffer:o.isURLSearchParams(e)?(n(t,"application/x-www-form-urlencoded;charset=utf-8"),e.toString()):o.isObject(e)?(n(t,"application/json;charset=utf-8"),JSON.stringify(e)):e}],transformResponse:[function(e){if("string"==typeof e)try{e=JSON.parse(e)}catch(e){}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};o.forEach(["delete","get","head"],function(e){a.headers[e]={}}),o.forEach(["post","put","patch"],function(e){a.headers[e]=o.merge(i)}),e.exports=a},function(e,t,r){var n=r(2);e.exports=function(e,t){n.forEach(e,function(r,n){n!==t&&n.toUpperCase()===t.toUpperCase()&&(e[t]=r,delete e[n])})}},function(e,t,r){var n=r(2),o=r(13),s=r(16),i=r(5),a=r(17),u=r(20),c=r(21),f=r(14);e.exports=function(e){return new Promise(function(t,r){var l=e.data,d=e.headers;n.isFormData(l)&&delete d["Content-Type"];var p=new XMLHttpRequest;if(e.auth){var h=e.auth.username||"",m=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";d.Authorization="Basic "+btoa(h+":"+m)}var g=a(e.baseURL,e.url);if(p.open(e.method.toUpperCase(),i(g,e.params,e.paramsSerializer),!0),p.timeout=e.timeout,p.onreadystatechange=function(){if(p&&4===p.readyState&&(0!==p.status||p.responseURL&&0===p.responseURL.indexOf("file:"))){var n="getAllResponseHeaders"in p?u(p.getAllResponseHeaders()):null,s=e.responseType&&"text"!==e.responseType?p.response:p.responseText,i={data:s,status:p.status,statusText:p.statusText,headers:n,config:e,request:p};o(t,r,i),p=null}},p.onabort=function(){p&&(r(f("Request aborted",e,"ECONNABORTED",p)),p=null)},p.onerror=function(){r(f("Network Error",e,null,p)),p=null},p.ontimeout=function(){var t="timeout of "+e.timeout+"ms exceeded";e.timeoutErrorMessage&&(t=e.timeoutErrorMessage),r(f(t,e,"ECONNABORTED",p)),p=null},n.isStandardBrowserEnv()){var y=(e.withCredentials||c(g))&&e.xsrfCookieName?s.read(e.xsrfCookieName):void 0;y&&(d[e.xsrfHeaderName]=y)}if("setRequestHeader"in p&&n.forEach(d,function(e,t){void 0===l&&"content-type"===t.toLowerCase()?delete d[t]:p.setRequestHeader(t,e)}),n.isUndefined(e.withCredentials)||(p.withCredentials=!!e.withCredentials),e.responseType)try{p.responseType=e.responseType}catch(t){if("json"!==e.responseType)throw t}"function"==typeof e.onDownloadProgress&&p.addEventListener("progress",e.onDownloadProgress),"function"==typeof e.onUploadProgress&&p.upload&&p.upload.addEventListener("progress",e.onUploadProgress),e.cancelToken&&e.cancelToken.promise.then(function(e){p&&(p.abort(),r(e),p=null)}),l||(l=null),p.send(l)})}},function(e,t,r){var n=r(14);e.exports=function(e,t,r){var o=r.config.validateStatus;r.status&&o&&!o(r.status)?t(n("Request failed with status code "+r.status,r.config,null,r.request,r)):e(r)}},function(e,t,r){var n=r(15);e.exports=function(e,t,r,o,s){var i=new Error(e);return n(i,t,r,o,s)}},function(e,t){e.exports=function(e,t,r,n,o){return e.config=t,r&&(e.code=r),e.request=n,e.response=o,e.isAxiosError=!0,e.toJSON=function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:this.config,code:this.code}},e}},function(e,t,r){var n=r(2);e.exports=n.isStandardBrowserEnv()?{write:function(e,t,r,o,s,i){var a=[];a.push(e+"="+encodeURIComponent(t)),n.isNumber(r)&&a.push("expires="+new Date(r).toGMTString()),n.isString(o)&&a.push("path="+o),n.isString(s)&&a.push("domain="+s),!0===i&&a.push("secure"),document.cookie=a.join("; ")},read:function(e){var t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove:function(e){this.write(e,"",Date.now()-864e5)}}:{write:function(){},read:function(){return null},remove:function(){}}},function(e,t,r){var n=r(18),o=r(19);e.exports=function(e,t){return e&&!n(t)?o(e,t):t}},function(e,t){e.exports=function(e){return/^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(e)}},function(e,t){e.exports=function(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}},function(e,t,r){var n=r(2),o=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"];e.exports=function(e){var t,r,s,i={};return e?(n.forEach(e.split("\n"),function(e){if(s=e.indexOf(":"),t=n.trim(e.substr(0,s)).toLowerCase(),r=n.trim(e.substr(s+1)),t){if(i[t]&&o.indexOf(t)>=0)return;i[t]="set-cookie"===t?(i[t]?i[t]:[]).concat([r]):i[t]?i[t]+", "+r:r}}),i):i}},function(e,t,r){var n=r(2);e.exports=n.isStandardBrowserEnv()?function(){function e(e){var t=e;return r&&(o.setAttribute("href",t),t=o.href),o.setAttribute("href",t),{href:o.href,protocol:o.protocol?o.protocol.replace(/:$/,""):"",host:o.host,search:o.search?o.search.replace(/^\?/,""):"",hash:o.hash?o.hash.replace(/^#/,""):"",hostname:o.hostname,port:o.port,pathname:"/"===o.pathname.charAt(0)?o.pathname:"/"+o.pathname}}var t,r=/(msie|trident)/i.test(navigator.userAgent),o=document.createElement("a");return t=e(window.location.href),function(r){var o=n.isString(r)?e(r):r;return o.protocol===t.protocol&&o.host===t.host}}():function(){return!0}},function(e,t,r){var n=r(2);e.exports=function(e,t){function r(e,t){return n.isPlainObject(e)&&n.isPlainObject(t)?n.merge(e,t):n.isPlainObject(t)?n.merge({},t):n.isArray(t)?t.slice():t}function o(o){n.isUndefined(t[o])?n.isUndefined(e[o])||(s[o]=r(void 0,e[o])):s[o]=r(e[o],t[o])}t=t||{};var s={},i=["url","method","data"],a=["headers","auth","proxy","params"],u=["baseURL","transformRequest","transformResponse","paramsSerializer","timeout","timeoutMessage","withCredentials","adapter","responseType","xsrfCookieName","xsrfHeaderName","onUploadProgress","onDownloadProgress","decompress","maxContentLength","maxBodyLength","maxRedirects","transport","httpAgent","httpsAgent","cancelToken","socketPath","responseEncoding"],c=["validateStatus"];n.forEach(i,function(e){n.isUndefined(t[e])||(s[e]=r(void 0,t[e]))}),n.forEach(a,o),n.forEach(u,function(o){n.isUndefined(t[o])?n.isUndefined(e[o])||(s[o]=r(void 0,e[o])):s[o]=r(void 0,t[o])}),n.forEach(c,function(n){n in t?s[n]=r(e[n],t[n]):n in e&&(s[n]=r(void 0,e[n]))});var f=i.concat(a).concat(u).concat(c),l=Object.keys(e).concat(Object.keys(t)).filter(function(e){return-1===f.indexOf(e)});return n.forEach(l,o),s}},function(e,t){function r(e){this.message=e}r.prototype.toString=function(){return"Cancel"+(this.message?": "+this.message:"")},r.prototype.__CANCEL__=!0,e.exports=r},function(e,t,r){function n(e){if("function"!=typeof e)throw new TypeError("executor must be a function.");var t;this.promise=new Promise(function(e){t=e});var r=this;e(function(e){r.reason||(r.reason=new o(e),t(r.reason))})}var o=r(23);n.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},n.source=function(){var e,t=new n(function(t){e=t});return{token:t,cancel:e}},e.exports=n},function(e,t){e.exports=function(e){return function(t){return e.apply(null,t)}}}])}(r={exports:{}},r.exports),r.exports);n.axios;class o{constructor(){const e=AWEMA.utils.object.get;this._parser=new DOMParser,this._loader=n.create({headers:{"Content-Type":"text/html"},timeout:e(AWEMA._config,"spa.timeout"),onDownloadProgress:this.onProgress.bind(this)}),this._tick=100;let r=e(AWEMA._config,"spa.loading");return this._loading=r||t.timeout,this}load(e){return this._insertProgressBar(),this._loader.get(e).then(t=>{this._html=t.data,this._doc=this._getDoc(),this._replaceContentOrRedirect(e),this._updateMeta(),this._deleteProgressBar(),delete this._html,delete this._doc,AWEMA.emit("spa::page_loaded")}).catch(e=>{throw this._deleteProgressBar(),e})}onProgress(e){if(e.total<e.loaded)return;let t=(e.loaded/e.total).toFixed(2);this._updateProgressBar(t)}fakeProgress(){let e=((new Date).getTime()-this._started)/this._loading;this._updateProgressBar(e)}_getDoc(){try{return this._html&&this._parser.parseFromString(this._html,"text/html")}catch(e){return!1}}_insertProgressBar(){let e=document.createElement("DIV");e.className="awema-spa-progress",e.style.transform="scaleX(0)";let t=document.body.firstChild;t?document.body.insertBefore(e,t):document.body.appendChild(e),this._percent=0,this._progress=e,this._started=(new Date).getTime(),this._interval=setInterval(this.fakeProgress.bind(this),this._tick)}_deleteProgressBar(){clearInterval(this._interval);let e=this._progress.parentElement;e?(this._progress.style.transform="scaleX(1)",setTimeout(()=>{e.removeChild(this._progress),delete this._progress},this._tick)):delete this._progress,delete this._percent,delete this._interval,delete this._started}_updateProgressBar(e){e>this._percent&&e<1&&(this._percent=e,this._progress.style.transform="scaleX("+e+")")}_replaceContentOrRedirect(e){if(!this._doc)return;let t=document.body.getAttribute("data-awema-spa-layout"),r=this._doc.body.getAttribute("data-awema-spa-layout");if(t&&r&&t===r){let e=document.body.querySelector("[data-awema-spa-container]"),n=this._doc.body.querySelector("[data-awema-spa-container]");e&&n?e.innerHTML=n.innerHTML:document.body.innerHTML=this._doc.body.innerHTML,e=null,n=null,t=null,r=null}else window.location.href=e}_updateMeta(){this._doc&&(document.title=this._doc.title,AWEMA.utils.setMeta("description",AWEMA.utils.getMeta("description",null,this._doc)))}}class s{constructor(){this.pageLoader=new o,this._current=location.pathname,this.setLinksClasses(),document.addEventListener("click",this.routeNavigation.bind(this),!1),window.addEventListener("popstate",this.historyNavigation.bind(this),!1)}routeNavigation(t){let r=t.target;(r="A"===r.tagName?r:r.closest("a"))&&e(r)&&!function(e){return e.which>1||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey}(t)&&(t.preventDefault(),this._current!==r.pathname&&(window.history.pushState(null,document.title,r.href),AWEMA._vueRouter&&AWEMA._vueRouter.replace({path:r.pathname}),this.pageLoader.load(r.href).then(()=>{this._current=location.pathname,this.setLinksClasses(),AWEMA.emit("core:popstate",this._current)}).catch(this.showError)))}historyNavigation(e){let t=window.location;t.pathname!==this._current&&(this._current=t.pathname,this.pageLoader.load(t.origin+t.pathname).then(()=>this.setLinksClasses()).catch(this.showError))}showError(e){e.message&&AWEMA.notify({status:"error",message:e.message})}setLinksClasses(){let t=document.querySelectorAll("a");for(let r=0;r<t.length;r++){let n=t[r];e(n)&&(n.classList.remove("is-active"),n.pathname===this._current&&n.classList.add("is-active"))}}}const i={name:"awema-spa",version:"1.0.3",install(e){e.Spa=new s}};if(window&&"AWEMA"in window)AWEMA.use(i);else{let e="__awema_plugins_stack__";window[e]=window[e]||[],window[e].push(i)}}();
