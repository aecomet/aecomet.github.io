class FooterComponent  {
	constructor() {
		const footerYear: HTMLInputElement = document.querySelector('footer span#year') as HTMLInputElement;
		footerYear.innerHTML = `${new Date().getFullYear()}`;
	}
}

interface MainInterface {
	onItemClick():void;
}

class MainComponent {
	protected modal: HTMLInputElement;
	constructor() {
		this.modal = document.querySelector('#modal') as HTMLInputElement;
	}
}

class SkillComponent extends MainComponent implements MainInterface {
	private skill: HTMLInputElement;
	constructor() {
		super();
		this.skill = document.querySelector('#skill') as HTMLInputElement;
		this.skill.addEventListener('click', this.onItemClick);
	}

 	onItemClick ():void {
		console.warn('skill');
	}
}

class ProfileComponent extends MainComponent implements MainInterface {
	private profile: HTMLInputElement;
	constructor() {
		super();
		this.profile = document.querySelector('#profile') as HTMLInputElement;
		this.profile.addEventListener('click', this.onItemClick);
	}

 	onItemClick ():void {
		console.warn('profile');
	}
}

class ContactComponent extends MainComponent implements MainInterface {
	private contact: HTMLInputElement;
	constructor() {
		super();
		this.contact = document.querySelector('#contact') as HTMLInputElement;
		this.contact.addEventListener('click', this.onItemClick);
	}

 	onItemClick ():void {
		console.warn('contact');
	}
}

document.addEventListener('DOMContentLoaded', e => {
	const footer = new FooterComponent();
	const skill = new SkillComponent();
	const profile = new ProfileComponent();
	const contact = new ContactComponent();
});
