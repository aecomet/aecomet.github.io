import { ProfileJSON, SkillJSON, ContactJSON } from '../assets/data/';
import { FooterComponent } from '../layouts/_footer';
import { ProfileComponent } from './profile/_profile';
// import { SkillComponent } from './skill/_skill';
// import { ContactComponent } from './contact/_contact';

/* === Main === */
export interface MainInterface {
	render():void;
}

export interface Template {
	header: string;
	body: string;
}
/* === App Event === */
document.addEventListener('DOMContentLoaded', e => {
	const footer = new FooterComponent();
	const profile = new ProfileComponent();
	// const skill = new SkillComponent();
	// const contact = new ContactComponent();

	// render view
	profile.render();
});
