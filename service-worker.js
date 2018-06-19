/**
 * === Service Worker ===
 **/
const CACHE_NAME = 'portfolio-sw-cache' // cache name
let urlsToCache = [
    `/`,
    `/index.html`,
    `/app.js`,
    `/app.css`,
    `/vendor.js`,
    `/vendor.css`,
    `/data.js`,
    `/component.js`,
    `/component.css`,
    `/static/images/image_1.png`,
    `/static/images/image_2.png`,
    `/static/images/image_3.png`,
    `/static/images/image_4.png`,
    `/static/images/icons/icon-128x128.png`,
    `/static/images/icons/icon-144x144.png`,
    `/static/images/icons/icon-152x152.png`,
    `/static/images/icons/icon-192x192.png`,
    `/static/images/icons/icon-256x256.png`,
    `/static/images/icons/apple-touch-icon.png`,
    `/static/images/icons/favicon.ico`,
    `/manifest.json`,
]

// install module
self.addEventListener('install', e => {
    // console.log('[Service Worker]: Install')
    e.waitUntil(
        caches.open(CACHE_NAME).then(cache => { // Open a cache storage
            // console.log('Opened cache')
            return cache.addAll(urlsToCache) // add data
        }).catch(err => {
            console.log('install err: ', err)
        })
    )
})

// fetch module
self.addEventListener('fetch', e => {
    // console.log('[Service Worker]: fetch', e.request.url)

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
            }).catch(err => {
                console.log('fetch err: ', err)
            })
        })
    )
})

// update module
const cacheWhiteList = [
    CACHE_NAME
]

self.addEventListener('activate', e => {
    // console.log('[Service Worker]: activate')
    e.waitUntil(
        caches.keys().then(keyList => {
            return Promise.all(
                keyList.map(key => {
                    if (key !== CACHE_NAME) {
                        return caches.delete(key)
                    }
                })
            )
        })
    )
    return self.clients.claim()
})