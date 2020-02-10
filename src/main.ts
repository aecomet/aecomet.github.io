/* === Main Application bundle file === */
// Libraries
import 'skeleton-css/css/normalize.css'
import 'skeleton-css/css/skeleton.css'
import '@fortawesome/fontawesome-free/css/all.css'

// Custom Style
import './style.scss'

/* === Service Worker === */
// Checking support a `service worker`
if ('serviceWorker' in navigator &&
    (window.location.protocol === 'https:' || window.location.hostname === 'localhost')) {
    // const registration = runtime.register()
} else {
    console.warn('This browser doesn\'t use a service worker')
}
