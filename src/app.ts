/* === Main Application bundle file === */
// Libraries
import App from '@src/components/App.vue';
import vuetify from '@src/plugins/vuetify.ts'; // path to vuetify export
import Vue from 'vue';

new Vue({
  vuetify,
  render: (h) => h(App, {})
}).$mount('#app');

/* === Service Worker === */
// Checking support a `service worker`
if (
  'serviceWorker' in navigator &&
  (window.location.protocol === 'https:' || window.location.hostname === 'localhost')
) {
  // const registration = runtime.register()
} else {
  console.warn("This browser doesn't use a service worker");
}
