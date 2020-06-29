/* === Main Application bundle file === */
// Libraries
import '@fortawesome/fontawesome-free/css/all.css'
import 'modern-css-reset/dist/reset.min.css'

// Custom Style and Script
import './style.scss'
import { MainComponent } from './components/main'
// import VirtualDomApp from './app/VirtualDomApp'

// render custom component
MainComponent.init();

/* === Service Worker === */
// Checking support a `service worker`
if ('serviceWorker' in navigator &&
    (window.location.protocol === 'https:' || window.location.hostname === 'localhost')) {
    // const registration = runtime.register()
} else {
    console.warn('This browser doesn\'t use a service worker')
}
