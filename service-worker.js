/**
 * === Service Worker ===
 **/
const CACHE_NAME = 'portfolio-sw-cache' // cache name
let urlsToCache = [
    '/',
    '/index.html',
    '/app.js',
    '/app.css',
    '/vendor.js',
    '/vendor.css',
    '/data.js',
    '/component.js',
    '/component.css',
]

// install module
self.addEventListener('install', e => {
    e.waitUntil(
        caches.open(CACHE_NAME).then(cache => {
            console.log('Opened cache')
            return cache.addAll(urlsToCache)
        })
    )
})

// fetch module
self.addEventListener('fetch', e => {
    e.respondWith(
        caches.match(e.request).then(res => {

            // If a response has the cache, it returns the data to client.
            if (res) {
                return res
            }

            // network request
            // TODO: you must use `clone`, because a request handles once only. So, you prepare two files.
            const fetchRequest = e.request.clone()

            return fetch(fetchRequest).then(response => {
                // Checking a response whether it corrects.
                if (!response || response.status !== 200 || response.type !== 'basic') {
                    return response
                }

                // TODO: you must use `clone`, because a request handles once only. So, you prepare two files.
                const responseToCache = response.clone()

                caches.open(CACHE_NAME).then(cache => {
                    cache.put(e.request, responseToCache) // Registering cache data
                })

                return response
            })
        })
    )
})

// update module
self.addEventListener('activate', e => {
    // const cacheWhiteList = []
})