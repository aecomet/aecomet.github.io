/* === Main Application bundle file === */
// Libraries
import App from '@src/App.vue';
import MyVuetify from '@src/plugins/vuetify.ts';
import { ViteSSG } from 'vite-ssg/single-page';

export const createApp = ViteSSG(App, ({ app }) => {
  app.use(MyVuetify);
});
