/**
 * =============================
 * Main Application bundle file
 * =============================
 */
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuetify from '@/plugins/vuetify';
import '@/plugins/vue-ls'
import VueI18n from '@/plugins/vue-i18n';
import router from '@/plugins/vue-router'
// import runtime from 'serviceworker-webpack-plugin/lib/runtime';

// Components
import {
    App
} from './components/'


// CSS / Icon pack
import './style.css'

// icon pack
import '@fortawesome/fontawesome-free/css/all.css' // Ensure you are using css-loader

// Enable Vue Modules


// Vue.config.lang = 'ja' // Set Language for i18n
Vue.config.productionTip = false

/* eslint-disable no-new */
// Main Application
new Vue({
    router,
    i18n: VueI18n,
    vuetify: Vuetify,
    template: '<App/>',
    components: {
        App
    }
}).$mount('#app')

/**
 *  === Service Worker ===
 */
// Checking support a `service worker`
if ('serviceWorker' in navigator &&
    (window.location.protocol === 'https:' || window.location.hostname === 'localhost')) {
    // const registration = runtime.register()
} else {
    console.warn('This browser doesn\'t use a service worker')
}
