// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var e="function"==typeof Object.defineProperty?Object.defineProperty:null;var t=function(){try{return e({},"x",{}),!0}catch(e){return!1}},r=Object.defineProperty,o=Object.prototype,n=o.toString,a=o.__defineGetter__,l=o.__defineSetter__,i=o.__lookupGetter__,u=o.__lookupSetter__;var c=r,_=function(e,t,r){var c,_,p,f;if("object"!=typeof e||null===e||"[object Array]"===n.call(e))throw new TypeError("invalid argument. First argument must be an object. Value: `"+e+"`.");if("object"!=typeof r||null===r||"[object Array]"===n.call(r))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+r+"`.");if((_="value"in r)&&(i.call(e,t)||u.call(e,t)?(c=e.__proto__,e.__proto__=o,delete e[t],e[t]=r.value,e.__proto__=c):e[t]=r.value),p="get"in r,f="set"in r,_&&(p||f))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return p&&a&&a.call(e,t,r.get),f&&l&&l.call(e,t,r.set),e},p=t()?c:_;var f=function(e,t,r){p(e,t,{configurable:!0,enumerable:!1,writable:!0,value:r})};export{f as default};
//# sourceMappingURL=mod.js.map
