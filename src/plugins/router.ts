import HomePage from '@src/pages/HomePage.vue';
import UserCareer from '@src/pages/UserCareer.vue';
import UserContact from '@src/pages/UserContact.vue';
import UserProfile from '@src/pages/UserProfile.vue';
import { createMemoryHistory, createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
  { path: '/', name: 'Home', component: HomePage },
  { path: '/profile', name: 'Profile', component: UserProfile },
  { path: '/career', name: 'Career', component: UserCareer },
  { path: '/contact', name: 'Contact', component: UserContact }
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
