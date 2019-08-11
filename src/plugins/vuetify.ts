import Vue from 'vue'
import 'vuetify/dist/vuetify.min.css'
import Vuetify from 'vuetify/lib'
import { Touch } from 'vuetify/lib/directives'

Vue.use(Vuetify, {
	directives: {
		Touch
	}
});

export default new Vuetify({
  icons: {
		iconfont: 'fa'
		}
});