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
import VueI18n from 'vue-i18n';
import router from '@/plugins/vue-router'
// import runtime from 'serviceworker-webpack-plugin/lib/runtime';

// Components
import {
    App
} from './components/'


// Initial Data
import {
    BaseJSON,
    ProfileJSON,
    SkillJSON,
    LinkJSON,
    WorkJSON,
    ContactJSON
} from './static/data/'


const messages = {
    ja: {
        base: BaseJSON.ja,
        profile: ProfileJSON.ja,
        skill: SkillJSON.ja,
        link: LinkJSON.ja,
        work: WorkJSON.ja,
        contact: ContactJSON.ja
    },
    en: {
        base: BaseJSON.en,
        profile: ProfileJSON.en,
        skill: SkillJSON.en,
        link: LinkJSON.en,
        work: WorkJSON.en,
        contact: ContactJSON.en
    }
}

// CSS / Icon pack
import './style.css'

// icon pack
import '@fortawesome/fontawesome-free/css/all.css' // Ensure you are using css-loader

// Enable Vue Modules
Vue.use(VueI18n)

/**
 * I18n
 */
// Create a vueI18n instance:
const i18n = new VueI18n({
    locale: 'ja', // set locale
    messages // set locale messages
})

// Vue.config.lang = 'ja' // Set Language for i18n
Vue.config.productionTip = false

/* eslint-disable no-new */
// Main Application
new Vue({
    router,
    i18n,
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
