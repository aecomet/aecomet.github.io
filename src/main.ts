/**
 * =============================
 * Main Application bundle file
 * =============================
 */
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuetify from 'vuetify'
import VueI18n from 'vue-i18n';
import Router from 'vue-router'
import * as VueGoogleMaps from 'vue2-google-maps';
import runtime from 'serviceworker-webpack-plugin/lib/runtime';
import LocalStorage from 'vue-ls'

// Components
import {
    App,
    Profile,
    Product,
    Skill,
    NotFound
} from './components/'


// Initial Data
import {
    BaseJSON,
    ProfileJSON,
    ProductJSON,
    SkillJSON,
    LinkJSON
} from './static/data/'

// set local storage config.
const lsOptions = {
    namespace: 'portfolio__', // key prefix
    name: 'ls', // name variable Vue.[ls] or this.[$ls],
    storage: 'local' // storage name session, local, memory
}

const messages = {
    ja: {
        base: BaseJSON.ja,
        profile: ProfileJSON.ja,
        resume: ProductJSON.ja,
        skill: SkillJSON.ja,
        link: LinkJSON.ja
    },
    en: {
        base: BaseJSON.en,
        profile: ProfileJSON.en,
        resume: ProductJSON.en,
        skill: SkillJSON.en,
        link: LinkJSON.en
    }
}

const baseTitle = 'ポートフォリオ - Portfolio ';
const Routes = [
    { path: '/', name: 'Profile', component: Profile, meta: { title: `${baseTitle} | プロフィール/Profile` } },
    { path: '/product', name: 'Products', component: Product, meta: { title: `${baseTitle} | 成果物/Products` } },
    { path: '/skill', name: 'Skills', component: Skill, meta: { title: `${baseTitle} | スキル/Skills` } },
    { path: '*', name: 'NotFound', component: NotFound, meta: { title: `${baseTitle} | 404 Not found` } }
]

// CSS / Icon pack
import './style.css'
import 'vuetify/dist/vuetify.min.css'

// icon pack
import { library } from '@fortawesome/fontawesome-svg-core'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fas, faCoffee } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
library.add(faCoffee)
library.add(fas)
library.add(far)
library.add(fab)

Vue.component('font-awesome-icon', FontAwesomeIcon)

// Enable Vue Modules
Vue.use(Vuetify)
Vue.use(VueI18n)
Vue.use(Router)
Vue.use(LocalStorage, lsOptions)
Vue.use(VueGoogleMaps, {
    load: {
        key: 'AIzaSyC-9WiQjFhxE5DWsG_tJUArjc17lItzoxA',
        // libraries: 'places', // This is required if you use the Autocomplete plugin
        // OR: libraries: 'places,drawing'
        // OR: libraries: 'places,drawing,visualization'
        // (as you require)
    }
});

/**
 * Router
 */
const router = new Router({
    routes: Routes,
    mode: 'history',
    linkActiveClass: 'active'
})

// Before process
router.beforeResolve((to, from, next) => {
    setTimeout(() => { window.scrollTo(0, 0) }, 100)
    next()
})

// After process
router.afterEach((to, from) => {
    if (to.meta && to.meta.title) {
        document.title = to.meta.title
    }
})

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
    el: '#app',
    router,
    i18n,
    template: '<App/>',
    components: {
        App
    }
})

/**
 *  === Service Worker ===
 */
// Checking support a `service worker`
if ('serviceWorker' in navigator &&
    (window.location.protocol === 'https:' || window.location.hostname === 'localhost')) {
    const registration = runtime.register()
} else {
    console.warn('This browser doesn\'t use a service worker')
}
/* === Cache === */
// Checking exist a cache
if ('caches' in window) {
    // caches.match(url).then(res => {
    //
    // })
}