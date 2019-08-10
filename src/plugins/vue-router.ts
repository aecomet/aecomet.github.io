import Vue from 'vue'
import Router from 'vue-router'
// Components
import {
	App,
	Profile,
	NotFound,
	Work
} from '@/components/'

const baseTitle = 'ポートフォリオ - Portfolio ';
const Routes = [
    { path: '/', name: 'profile_path', component: Profile, meta: { title: `プロフィール/Profile | ${baseTitle}` } },
    { path: '/work', name: 'work_path', component: Work, meta: { title: `実績/Works | ${baseTitle}` } },
    { path: '*', name: 'NotFound', component: NotFound, meta: { title: `404 Not found | ${baseTitle}` } }
]

Vue.use(Router)

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

export default router