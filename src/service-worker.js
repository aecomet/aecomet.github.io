//
// /**
//  * === Service Worker ===
//  **/
// const { assets } = global.serviceWorkerOption // get all files
// const CACHE_NAME = `portfolio-sw-${new Date().toISOString()}` // cache name
// let urlsToCache = [
//     ...assets,
//     './',
// ]
//
// urlsToCache = urlsToCache.map(path => {
//     return new URL(path, location).toString()
// })
//
//
// // install module
// self.addEventListener('install', e => {
//     // console.log('[Service Worker]: Install')
//     e.waitUntil(
//         caches
//             .open(CACHE_NAME)
//             .then(cache => { // Open a cache storage
//                 // console.log('Opened cache')
//                 return cache.addAll(urlsToCache) // add data
//             }).catch(err => {
//                 console.log('install err: ', err)
//                 throw err
//             })
//     )
// })
//
// // fetch module
// self.addEventListener('fetch', e => {
//     // console.log('[Service Worker]: fetch', e.request.url)
//
//     // Ignore not GET request.
//     if (e.request.method !== 'GET') {
//         // console.log(`[SW] Ignore non GET request ${request.method}`)
//         return
//     }
//     e.respondWith(
//         caches.match(e.request).then(res => {
//
//             // If a response has the cache, it returns the data to client.
//             if (res) {
//                 return res
//             }
//
//             // network request
//             // TODO: you must use `clone`, because a request handles once only. So, you prepare two files.
//             const fetchRequest = e.request.clone()
//
//             return fetch(fetchRequest).then(response => {
//                 // Checking a response whether it corrects.
//                 if (!response || response.status !== 200 || response.type !== 'basic') {
//                     return response
//                 }
//
//                 // TODO: you must use `clone`, because a request handles once only. So, you prepare two files.
//                 const responseToCache = response.clone()
//
//                 caches.open(CACHE_NAME).then(cache => {
//                     cache.put(e.request, responseToCache) // Registering cache data
//                 })
//
//                 return response
//             }).catch(err => {
//                 console.log('fetch err: ', err)
//             })
//         })
//     )
// })
//
// // update module
// self.addEventListener('activate', e => {
//     // console.log('[Service Worker]: activate')
//     e.waitUntil(
//         caches.keys().then(keyList => {
//             return Promise.all(
//                 keyList.map(key => {
//                     if (key !== CACHE_NAME) {
//                         return caches.delete(key)
//                     }
//                 })
//             )
//         })
//     )
//     return self.clients.claim()
// })