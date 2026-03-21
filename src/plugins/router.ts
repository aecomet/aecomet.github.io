import { createMemoryHistory, createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
  { path: '/', name: 'Home', component: () => import('@src/pages/HomePage.vue') },
  { path: '/profile', name: 'Profile', component: () => import('@src/pages/UserProfile.vue') },
  { path: '/career', name: 'Career', component: () => import('@src/pages/UserCareer.vue') },
  { path: '/contact', name: 'Contact', component: () => import('@src/pages/UserContact.vue') },
  { path: '/:pathMatch(.*)*', name: 'NotFound', component: () => import('@src/pages/NotFoundPage.vue') }
];

const history = typeof window !== 'undefined' ? createWebHistory() : createMemoryHistory();

export const router = createRouter({
  history,
  routes,
  scrollBehavior() {
    return { left: 0, top: 0 };
  }
});

export const go = (path: string) => {
  router.push(path);
};
