// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var e,t;e=this,t=function(){"use strict";var e="function"==typeof Object.defineProperty?Object.defineProperty:null,t=function(){try{return e({},"x",{}),!0}catch(e){return!1}},r=Object.defineProperty,o=Object.prototype,n=o.toString,l=o.__defineGetter__,i=o.__defineSetter__,a=o.__lookupGetter__,u=o.__lookupSetter__,c=r,f=function(e,t,r){var c,f,p,_;if("object"!=typeof e||null===e||"[object Array]"===n.call(e))throw new TypeError("invalid argument. First argument must be an object. Value: `"+e+"`.");if("object"!=typeof r||null===r||"[object Array]"===n.call(r))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+r+"`.");if((f="value"in r)&&(a.call(e,t)||u.call(e,t)?(c=e.__proto__,e.__proto__=o,delete e[t],e[t]=r.value,e.__proto__=c):e[t]=r.value),p="get"in r,_="set"in r,f&&(p||_))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return p&&l&&l.call(e,t,r.get),_&&i&&i.call(e,t,r.set),e},p=t()?c:f;return function(e,t,r){p(e,t,{configurable:!0,enumerable:!1,writable:!0,value:r})}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e="undefined"!=typeof globalThis?globalThis:e||self).setNonEnumerableProperty=t();
//# sourceMappingURL=index.js.map
