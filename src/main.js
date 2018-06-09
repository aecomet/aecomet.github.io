/**
 * =============================
 * Main Application bundle file
 * =============================
 */
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Vuetify from 'vuetify'

const router = []

// CSS
import '@/style.css'
import 'vuetify/dist/vuetify.min.css'

// Enable Vue Modules
Vue.use(Vuetify)

Vue.config.productionTip = false

/* eslint-disable no-new */
// Main Application
new Vue({
    el: '#app',
    router,
    template: '<App/>',
    components: { App }
})
