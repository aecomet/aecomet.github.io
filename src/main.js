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
import VueI18n from 'vue-i18n';
import Router from 'vue-router'
import * as VueGoogleMaps from 'vue2-google-maps';

// Components
import {
    Profile,
    Resume,
    Skill,
    Link,
    NotFound
} from '@/components/index'


// Initial Data
import {
    BaseJSON,
    ProfileJSON,
    ResumeJSON,
    SkillJSON,
    LinkJSON
} from '@/static/data/index'

const messages = {
    ja: {
        base: BaseJSON.ja,
        profile: ProfileJSON.ja,
        resume: ResumeJSON.ja,
        skill: SkillJSON.ja,
        link: LinkJSON.ja
    },
    en: {
        base: BaseJSON.en,
        profile: ProfileJSON.en,
        resume: ResumeJSON.en,
        skill: SkillJSON.en,
        link: LinkJSON.en
    }
}

const baseTitle = 'ポートフォリオ - Portfolio ';
const Routes = [
    { path: '/', name: 'Profile', component: Profile, meta: { title: `${baseTitle} | プロフィール/Profile` } },
    { path: '/resume', name: 'Resume', component: Resume, meta: { title: `${baseTitle} | 職歴・学歴/Resume` } },
    { path: '/skill', name: 'Skill', component: Skill, meta: { title: `${baseTitle} | スキル/Skill` } },
    { path: '/link', name: 'Link', component: Link, meta: { title: `${baseTitle} | リンク/Link` } },
    { path: '*', name: 'NotFound', component: NotFound, meta: { title: `${baseTitle} | 404 Not found` } }
]

// CSS / Icon pack
import '@/style.css'
import 'vuetify/dist/vuetify.min.css'
import fontawesome from '@fortawesome/fontawesome'
import brands from '@fortawesome/fontawesome-free-brands'
import faSpinner from '@fortawesome/fontawesome-free-solid/faSpinner'
import '@fortawesome/fontawesome-free-solid'

// Enable Vue Modules
Vue.use(Vuetify)
Vue.use(VueI18n)
Vue.use(Router)
Vue.use(VueGoogleMaps, {
    load: {
        key: 'AIzaSyC-9WiQjFhxE5DWsG_tJUArjc17lItzoxA',
        // libraries: 'places', // This is required if you use the Autocomplete plugin
        // OR: libraries: 'places,drawing'
        // OR: libraries: 'places,drawing,visualization'
        // (as you require)
    }
});
fontawesome.library.add(brands, faSpinner)

const router = new Router({
    routes: Routes,
    // mode: 'history',
    linkActiveClass: 'active',
    transitionOnLoad: true,
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

// Create a vueI18n instance:
const i18n = new VueI18n({
    locale: 'ja', // set locale
    messages // set locale messages
})

Vue.config.lang = 'ja' // Set Language for i18n
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

/* === Service Worker === */
// Checking support a `service worker`
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('./service-worker.js', { scope: '.' }).then(registration => {
        // console.log('Service Worker registration successful!')
    }).catch(err => {
        console.error('Service Worker registration failed:', err)
    })
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