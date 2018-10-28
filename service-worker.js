var serviceWorkerOption = {
  "assets": [
    "/public/vendor.c286afd20554f396216f.js",
    "/public/app.c286afd20554f396216f.js",
    "/public/component.c286afd20554f396216f.js",
    "/public/data.c286afd20554f396216f.js",
    "/public/app.c286afd20554f396216f.css",
    "/public/component.c286afd20554f396216f.css",
    "/public/vendor.c286afd20554f396216f.css",
    "/index.html",
    "/404.html",
    "/public/manifest.4df42386bac1dce9553383055dee9720.json",
    "/public/icons/default/icon_256x256.bdf05c831b2f67235f9e723fd88de5ef.png",
    "/public/icons/default/icon_192x192.0b7776844e28068d56e372defaeb6c71.png",
    "/public/icons/default/icon_152x152.2c0ae93f44672680c15ac1d05945319d.png",
    "/public/icons/default/icon_144x144.71c05b38beb6b3d63298869a46d55149.png",
    "/public/icons/default/icon_128x128.d01fac217c8f55f874c17dee5af07d55.png",
    "/public/icons/ios/icon_256x256.a1f3b7044f93219371b9c7a4b1c08ae9.png",
    "/public/icons/ios/icon_192x192.1b142f9311a52487be2deb92660111ac.png",
    "/public/icons/ios/icon_152x152.ed8b9ce707f1145e1611cb68ecbfb797.png",
    "/public/icons/ios/icon_144x144.640253dd5ac9a8bf6c8bdcc7a3bc3a3e.png",
    "/public/icons/ios/icon_128x128.44dca085a072429c27388ca3cca84a8e.png"
  ]
};
        
        !function(e){var t={};function n(r){if(t[r])return t[r].exports;var i=t[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(r,i,function(t){return e[t]}.bind(null,i));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){(function(e){const{assets:t}=e.serviceWorkerOption,n=`portfolio-sw-${(new Date).toISOString()}`;let r=[...t,"./"];r=r.map(e=>new URL(e,location).toString()),self.addEventListener("install",e=>{e.waitUntil(caches.open(n).then(e=>e.addAll(r)).catch(e=>{throw e}))}),self.addEventListener("fetch",t=>{const r=t.request;if("GET"!==r.method)return;if(new URL(r.url).origin!==location.origin)return;const i=caches.match(r).then(t=>t||fetch(r).then(e=>{if(!e||!e.ok)return e;const t=e.clone();return caches.open(n).then(e=>{e.put(r,t)}),e}).catch(t=>"navigate"===event.request.mode?e.caches.match("./"):null));t.respondWith(i)}),self.addEventListener("activate",e=>{e.waitUntil(caches.keys().then(e=>Promise.all(e.map(e=>0===e.indexOf(n)?null:caches.delete(e)))))}),self.addEventListener("message",e=>{switch(e.data.action){case"skipWaiting":self.skipWaiting&&(self.skipWaiting(),self.clients.claim())}})}).call(this,n(1))},function(e,t){var n;n=function(){return this}();try{n=n||Function("return this")()||(0,eval)("this")}catch(e){"object"==typeof window&&(n=window)}e.exports=n}]);