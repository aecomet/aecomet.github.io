/* === Main Application bundle file === */
// Libraries
import App from '@src/App.vue';
import '@src/assets/style.scss';
import { i18n } from '@src/plugins/i18n';
import { router } from '@src/plugins/router';
import MyVuetify from '@src/plugins/vuetify';
import { ViteSSG } from 'vite-ssg/single-page';

export const createApp = ViteSSG(App, ({ app }) => {
  app.use(router);
  app.use(MyVuetify);
  app.use(i18n);
});
