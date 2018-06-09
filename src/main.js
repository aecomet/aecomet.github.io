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

// Components
import Profile from '@/components/Profile'
import Achievement from '@/components/Achievement'
import University from '@/components/University'
import Link from '@/components/Link'
import NotFound from '@/components/NotFound'

const router = [
    { path: '/', name: 'Profile', component: Profile },
    { path: '/achievement', name: 'Achievement', component: Achievement },
    { path: '/university', name: 'University', component: University },
    { path: '/link', name: 'Link', component: Link },
    { path: '*', name: 'NotFound', component: NotFound }
]

// CSS
import '@/style.css'
import 'vuetify/dist/vuetify.min.css'

// Enable Vue Modules
Vue.use(Vuetify)
Vue.use(VueI18n)

Vue.config.productionTip = false

/* eslint-disable no-new */
// Main Application
new Vue({
    el: '#app',
    router,
    template: '<App/>',
    components: { App }
})
