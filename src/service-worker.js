// /**
//  * === Service Worker ===
//  **/
// const { assets } = global.serviceWorkerOption // get all files
// const CACHE_NAME = `portfolio-sw-${new Date().toISOString()}` // cache name
// let urlsToCache = [
//     ...assets,
//     './',
// ]

// urlsToCache = urlsToCache.map(path => {
//     return new URL(path, location).toString()
// })


// // install module
// self.addEventListener('install', e => {
//     // console.log('[Service Worker]: Install')
//     e.waitUntil(
//         caches
//             .open(CACHE_NAME)
//             .then(cache => cache.addAll(urlsToCache)) // Open a cache storage
//             .catch(err => {
//                 console.log('install err: ', err)
//                 throw err
//             })
//     )
// })

// // fetch module
// self.addEventListener('fetch', e => {
//     // console.log('[Service Worker]: fetch', e.request.url)

//     const request = e.request

//     // Ignore not GET request.
//     if (request.method !== 'GET') {
//         // console.log(`[SW] Ignore non GET request ${request.method}`)
//         return
//     }

//     const requestUrl = new URL(request.url)

//     // Ignore difference origin.
//     if (requestUrl.origin !== location.origin) {
//         return
//     }

//     const resource = caches.match(request).then(res => {

//         // If a response has the cache, it returns the data to client.
//         if (res) {
//             return res
//         }

//         // network request
//         return fetch(request).then(response => {
//             // Checking a response whether it corrects.
//             if (!response || !response.ok) {
//                 return response
//             }

//             // TODO: you must use `clone`, because a request handles once only. So, you prepare two files.
//             const responseCache = response.clone()

//             caches.open(CACHE_NAME).then(cache => {
//                 cache.put(request, responseCache) // Registering cache data
//             })

//             return response
//         }).catch(err => {
//             console.log('fetch err: ', err)
//             // User is landing on our page.
//             if (event.request.mode === 'navigate') {
//                 return global.caches.match('./')
//             }

//             return null
//         })
//     })

//     e.respondWith(resource)
// })

// // update module
// self.addEventListener('activate', e => {
//     // console.log('[Service Worker]: activate')
//     e.waitUntil(
//         caches.keys().then(cacheNames => {
//             return Promise.all(
//                 cacheNames.map(cacheName => {
//                     if (cacheName.indexOf(CACHE_NAME) === 0) return null

//                     return caches.delete(cacheName)
//                 })
//             )
//         })
//     )
//     // return self.clients.claim()
// })

// self.addEventListener('message', e => {
//     switch (e.data.action) {
//         case 'skipWaiting':
//             if (self.skipWaiting) {
//                 self.skipWaiting()
//                 self.clients.claim()
//             }
//             break
//         default:
//             break
//     }
// })