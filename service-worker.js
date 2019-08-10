var serviceWorkerOption = {
  "assets": [
    "/public/fonts/fa-brands-400.eot",
    "/public/fonts/fa-regular-400.eot",
    "/public/fonts/fa-solid-900.eot",
    "/public/fonts/fa-brands-400.woff2",
    "/public/fonts/fa-brands-400.woff",
    "/public/fonts/fa-brands-400.ttf",
    "/public/media/fa-brands-400.svg",
    "/public/fonts/fa-regular-400.woff2",
    "/public/fonts/fa-regular-400.woff",
    "/public/fonts/fa-regular-400.ttf",
    "/public/media/fa-regular-400.svg",
    "/public/fonts/fa-solid-900.woff2",
    "/public/fonts/fa-solid-900.woff",
    "/public/fonts/fa-solid-900.ttf",
    "/public/media/fa-solid-900.svg",
    "/public/vendor.js",
    "/public/app.js",
    "/public/component.js",
    "/public/data.js",
    "/public/vuetify.js",
    "/public/app.css",
    "/public/component.css",
    "/public/vuetify.css",
    "/public/vendor.css",
    "/index.html",
    "/404.html",
    "/manifest.json",
    "/public/icons/default/icon_512x512.d3b0092223ab8e72f668efc97951500a.png",
    "/public/icons/default/icon_256x256.bdf05c831b2f67235f9e723fd88de5ef.png",
    "/public/icons/default/icon_192x192.0b7776844e28068d56e372defaeb6c71.png",
    "/public/icons/default/icon_152x152.2c0ae93f44672680c15ac1d05945319d.png",
    "/public/icons/default/icon_144x144.71c05b38beb6b3d63298869a46d55149.png",
    "/public/icons/default/icon_128x128.d01fac217c8f55f874c17dee5af07d55.png",
    "/public/icons/ios/icon_512x512.5de80bddab9cc62e51a0988ccee8aaf1.png",
    "/public/icons/ios/icon_256x256.a1f3b7044f93219371b9c7a4b1c08ae9.png",
    "/public/icons/ios/icon_192x192.1b142f9311a52487be2deb92660111ac.png",
    "/public/icons/ios/icon_152x152.ed8b9ce707f1145e1611cb68ecbfb797.png",
    "/public/icons/ios/icon_144x144.640253dd5ac9a8bf6c8bdcc7a3bc3a3e.png",
    "/public/icons/ios/icon_128x128.44dca085a072429c27388ca3cca84a8e.png"
  ]
};
        
        /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {/**
 * === Service Worker ===
 **/
const { assets } = global.serviceWorkerOption // get all files
const CACHE_NAME = `portfolio-sw-${new Date().toISOString()}` // cache name
let urlsToCache = [
    ...assets,
    './',
]

urlsToCache = urlsToCache.map(path => {
    return new URL(path, location).toString()
})


// install module
self.addEventListener('install', e => {
    // console.log('[Service Worker]: Install')
    e.waitUntil(
        caches
            .open(CACHE_NAME)
            .then(cache => cache.addAll(urlsToCache)) // Open a cache storage
            .catch(err => {
                console.log('install err: ', err)
                throw err
            })
    )
})

// fetch module
self.addEventListener('fetch', e => {
    // console.log('[Service Worker]: fetch', e.request.url)

    const request = e.request

    // Ignore not GET request.
    if (request.method !== 'GET') {
        // console.log(`[SW] Ignore non GET request ${request.method}`)
        return
    }

    const requestUrl = new URL(request.url)

    // Ignore difference origin.
    if (requestUrl.origin !== location.origin) {
        return
    }

    const resource = caches.match(request).then(res => {

        // If a response has the cache, it returns the data to client.
        if (res) {
            return res
        }

        // network request
        return fetch(request).then(response => {
            // Checking a response whether it corrects.
            if (!response || !response.ok) {
                return response
            }

            // TODO: you must use `clone`, because a request handles once only. So, you prepare two files.
            const responseCache = response.clone()

            caches.open(CACHE_NAME).then(cache => {
                cache.put(request, responseCache) // Registering cache data
            })

            return response
        }).catch(err => {
            console.log('fetch err: ', err)
            // User is landing on our page.
            if (event.request.mode === 'navigate') {
                return global.caches.match('./')
            }

            return null
        })
    })

    e.respondWith(resource)
})

// update module
self.addEventListener('activate', e => {
    // console.log('[Service Worker]: activate')
    e.waitUntil(
        caches.keys().then(cacheNames => {
            return Promise.all(
                cacheNames.map(cacheName => {
                    if (cacheName.indexOf(CACHE_NAME) === 0) return null

                    return caches.delete(cacheName)
                })
            )
        })
    )
    // return self.clients.claim()
})

self.addEventListener('message', e => {
    switch (e.data.action) {
        case 'skipWaiting':
            if (self.skipWaiting) {
                self.skipWaiting()
                self.clients.claim()
            }
            break
        default:
            break
    }
})
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(1)))

/***/ }),
/* 1 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ })
/******/ ]);