import Vue from 'vue'
import 'vuetify/dist/vuetify.min.css'
import Vuetify, {
	VApp,
	VAppBar,
	VTabs,
	VTabsSlider,
	VTab,
  VCard,
  VRating
} from 'vuetify/lib'
import { Ripple } from 'vuetify/lib/directives'

Vue.use(Vuetify, {
  components: {
		VApp,
		VAppBar,
		VTabs,
		VTabsSlider,
		VTab,
    VCard,
    VRating
  },
  directives: {
    Ripple,
  },
})

Vue.use(Vuetify);

export default new Vuetify({
  icons: {
		iconfont: 'fa'
		}
});