/* === Main Application bundle file === */
// Libraries
import App from '@src/components/App.vue';
import MyVuetify from '@src/plugins/vuetify.ts';
import { createApp } from 'vue';

const app = createApp(App);

app.use(MyVuetify);
app.mount('#app');
