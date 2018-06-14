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
    // `https://maps.googleapi.com/maps/api/js?`
]
// https://maps.googleapis.com/maps/api/js/ViewportInfoService.GetViewportInfo?1m6&1m2&1d34.6439916728885&2d135.78353990283597&2m2&1d34.65220002017185&2d135.79704395804413&2u17&4sja&5e0&6sm%40425000000&7b0&8e0&callback=_xdc_._a17soj&token=9344

// install module
self.addEventListener('install', e => {
    // console.log('[Service Worker]: Install')
    e.waitUntil(
        caches.open(CACHE_NAME).then(cache => { // Open a cache storage
            console.log('Opened cache')
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