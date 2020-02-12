var serviceWorkerOption = {
  "assets": [
    "/public/fonts/fa-brands-400.eot",
    "/public/fonts/fa-brands-400.woff2",
    "/public/fonts/fa-brands-400.woff",
    "/public/fonts/fa-brands-400.ttf",
    "/public/media/fa-brands-400.svg",
    "/public/fonts/fa-regular-400.eot",
    "/public/fonts/fa-regular-400.woff2",
    "/public/fonts/fa-regular-400.woff",
    "/public/fonts/fa-regular-400.ttf",
    "/public/media/fa-regular-400.svg",
    "/public/fonts/fa-solid-900.eot",
    "/public/fonts/fa-solid-900.woff2",
    "/public/fonts/fa-solid-900.woff",
    "/public/fonts/fa-solid-900.ttf",
    "/public/media/fa-solid-900.svg",
    "/public/app.js",
    "/public/data.js",
    "/public/vendor.js",
    "/public/app.css",
    "/public/vendor.css",
    "/index.html",
    "/manifest.json",
    "/public/icons/default/icon_512x512.d0098f33e05addb5a25e8e6e54c4261d.png",
    "/public/icons/default/icon_256x256.1f508956dac9d188f1314fe074269f48.png",
    "/public/icons/default/icon_192x192.06407d1f5c3c7dc33250eedef74bd38a.png",
    "/public/icons/default/icon_152x152.5d3d087ba7fc380d24272a6e9ae57074.png",
    "/public/icons/default/icon_144x144.151e90a76d2d78018a44cd5a88a45307.png",
    "/public/icons/default/icon_128x128.1388f09296d56c97f1794bcca11aae4c.png",
    "/public/icons/ios/icon_512x512.996e9ec433671140c5bf1ba5d9c1e8d5.png",
    "/public/icons/ios/icon_256x256.9fc0a5b9b0c30c0e9b1d6009edb7b64f.png",
    "/public/icons/ios/icon_192x192.0c36af4edf68061899e08a65f7005142.png",
    "/public/icons/ios/icon_152x152.03aaf741558da0b8a4d876bb7fc8c1aa.png",
    "/public/icons/ios/icon_144x144.ba972348aaa2392594fbd1d88dfc171e.png",
    "/public/icons/ios/icon_128x128.b764780fa5dbe02dcc836c49fcba68df.png"
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