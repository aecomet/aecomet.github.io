var serviceWorkerOption = {
  "assets": [
    "/vendor.js",
    "/app.js",
    "/component.js",
    "/data.js",
    "/app.css",
    "/component.css",
    "/vendor.css",
    "/index.html",
    "/404.html",
    "/static/images/icons/apple-touch-icon.png",
    "/static/images/icons/icon-128x128.png",
    "/static/images/icons/icon-144x144.png",
    "/static/images/icons/icon-192x192.png",
    "/static/images/icons/icon-152x152.png",
    "/static/images/icons/icon-256x256.png",
    "/static/images/icons/favicon.ico",
    "/static/images/image_3.png",
    "/static/images/image_1.png",
    "/static/images/image_2.png",
    "/static/images/image_4.png",
    "/manifest.json"
  ]
};
        
        !function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){(function(e){const{assets:t}=e.serviceWorkerOption,n=`portfolio-sw-${(new Date).toISOString()}`;let r=[...t,"./"];r=r.map(e=>new URL(e,location).toString()),self.addEventListener("install",e=>{e.waitUntil(caches.open(n).then(e=>e.addAll(r)).catch(e=>{throw e}))}),self.addEventListener("fetch",e=>{"GET"===e.request.method&&e.respondWith(caches.match(e.request).then(t=>{if(t)return t;const r=e.request.clone();return fetch(r).then(t=>{if(!t||200!==t.status||"basic"!==t.type)return t;const r=t.clone();return caches.open(n).then(t=>{t.put(e.request,r)}),t}).catch(e=>{})}))}),self.addEventListener("activate",e=>(e.waitUntil(caches.keys().then(e=>Promise.all(e.map(e=>{if(e!==n)return caches.delete(e)})))),self.clients.claim()))}).call(this,n(1))},function(e,t){var n;n=function(){return this}();try{n=n||Function("return this")()||(0,eval)("this")}catch(e){"object"==typeof window&&(n=window)}e.exports=n}]);