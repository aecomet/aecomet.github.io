import ProfileJSON from './Profile.json'
import SkillJSON from './Skill.json'
import ContactJSON from './Contact.json'

type ProfileJsonState = {
	header: string;
	body: {
		logo: string;
		name: string;
		note: string;
		email: {
			prefix: string,
			suffix: string
		},
		social_links: {
      name: string,
      url: string
    }[];
	};
}

export { ProfileJSON as ProfileJsonState, SkillJSON, ContactJSON }
