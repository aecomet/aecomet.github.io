import Vue from 'vue'
import VueI18n from 'vue-i18n';

// Initial Data
import {
	BaseJSON,
	ProfileJSON,
	SkillJSON,
	LinkJSON,
	WorkJSON,
	ContactJSON
} from '@/static/data/'


const messages = {
	ja: {
			base: BaseJSON.ja,
			profile: ProfileJSON.ja,
			skill: SkillJSON.ja,
			link: LinkJSON.ja,
			work: WorkJSON.ja,
			contact: ContactJSON.ja
	},
	en: {
			base: BaseJSON.en,
			profile: ProfileJSON.en,
			skill: SkillJSON.en,
			link: LinkJSON.en,
			work: WorkJSON.en,
			contact: ContactJSON.en
	}
}

Vue.use(VueI18n)

/**
 * I18n
 */
export default new VueI18n({
	locale: 'ja', // set locale
	messages // set locale messages
})