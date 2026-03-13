/* === Main Application bundle file === */
// Libraries
import App from '@src/App.vue';
import '@src/assets/style.scss';
import { router } from '@src/plugins/router.ts';
import MyVuetify from '@src/plugins/vuetify.ts';
import { ViteSSG } from 'vite-ssg/single-page';

export const createApp = ViteSSG(App, ({ app }) => {
  app.use(router);
  app.use(MyVuetify);
});
