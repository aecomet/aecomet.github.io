import { ProfileJSON, SkillJSON, ContactJSON } from '../assets/data/';
import { FooterComponent } from '../layouts/FooterComponent';
import { ProfileComponent } from './profile/ProfileComponent';
import { SkillComponent } from './skill/SkillComponent';
// import { ContactComponent } from './contact/ContactComponent';

/* === Main === */
export interface MainInterface {
	render():void;
}

/* === App Event === */
document.addEventListener('DOMContentLoaded', e => {
	const footer = new FooterComponent();
	const profile = new ProfileComponent();
	const skill = new SkillComponent();
	// const contact = new ContactComponent();

	// render view
	footer.render();
	profile.render();
	skill.render();
});
