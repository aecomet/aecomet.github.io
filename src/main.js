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

// Components
import Profile from '@/components/Profile'
import Skill from '@/components/Skill'
import Resume from '@/components/Resume'
import Link from '@/components/Link'
import NotFound from '@/components/NotFound'

// Initial Data
import BaseJSON from '@/static/data/base.json'
import ProfileJSON from '@/static/data/base.json'
import ResumeJSON from '@/static/data/base.json'
import SkillJSON from '@/static/data/base.json'
import LinkJSON from '@/static/data/base.json'

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

const Routes = [
    { path: '/', name: 'Profile', component: Profile },
    { path: '/resume', name: 'Resume', component: Resume },
    { path: '/skill', name: 'Skill', component: Skill },
    { path: '/link', name: 'Link', component: Link },
    { path: '*', name: 'NotFound', component: NotFound }
]

// CSS
import '@/style.css'
import 'vuetify/dist/vuetify.min.css'

// Enable Vue Modules
Vue.use(Vuetify)
Vue.use(VueI18n)
Vue.use(Router)

const router = new Router({
    routes: Routes
})

// Before process
router.beforeResolve((to, from, next) => { next() })

// After process
router.afterEach((to, from) => {})

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
    components: { App }
})
