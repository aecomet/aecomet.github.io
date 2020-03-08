import { FooterComponent } from '../layouts/FooterComponent';
import { ProfileComponent } from './profile/ProfileComponent';
import { SkillComponent } from './skill/SkillComponent';
import { ContactComponent } from './contact/ContactComponent';
import { MobileComponent } from './MobileComponent';

/* === Main === */
export interface ComponentInterface {
	render():void;
}

export interface ModuleInterface {
	handler(): void;
}

/* === App Event === */
document.addEventListener('DOMContentLoaded', e => {
	// view component
	const footer = new FooterComponent();
	const profile = new ProfileComponent();
	const skill = new SkillComponent();
	const contact = new ContactComponent();
	
	// responsive component
	const mobile = new MobileComponent();

	// render view
	footer.render();
	profile.render();
	skill.render();
	contact.render();
});
