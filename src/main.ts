/* === Main Application bundle file === */
// Custom Style
import './style.css'
import '@fortawesome/fontawesome-free/css/all.css'

/* === Service Worker === */
// Checking support a `service worker`
if ('serviceWorker' in navigator &&
    (window.location.protocol === 'https:' || window.location.hostname === 'localhost')) {
    // const registration = runtime.register()
} else {
    console.warn('This browser doesn\'t use a service worker')
}
