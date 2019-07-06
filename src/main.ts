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
import runtime from 'serviceworker-webpack-plugin/lib/runtime';
import LocalStorage from 'vue-ls'

// Components
import {
    App,
    Profile,
    NotFound,
    Work
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

const baseTitle = 'ポートフォリオ - Portfolio ';
const Routes = [
    { path: '/', name: 'profile_path', component: Profile, meta: { title: `プロフィール/Profile | ${baseTitle}` } },
    { path: '/work', name: 'work_path', component: Work, meta: { title: `実績/Works | ${baseTitle}` } },
    { path: '*', name: 'NotFound', component: NotFound, meta: { title: `404 Not found | ${baseTitle}` } }
]

// CSS / Icon pack
import './style.css'
import 'vuetify/dist/vuetify.min.css'

// icon pack
import '@fortawesome/fontawesome-free/css/all.css' // Ensure you are using css-loader

// Enable Vue Modules
Vue.use(Vuetify, {
    iconfont: 'fa'
})
Vue.use(VueI18n)
Vue.use(Router)
Vue.use(LocalStorage, lsOptions)

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
    // const registration = runtime.register()
} else {
    console.warn('This browser doesn\'t use a service worker')
}
