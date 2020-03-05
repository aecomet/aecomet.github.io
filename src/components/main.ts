import { ProfileJSON, SkillJSON, ContactJSON } from '../assets/data/';

/* === Footer === */
class FooterComponent  {
	constructor() {
		const footerYear: HTMLInputElement = document.querySelector('footer span#year') as HTMLInputElement;
		footerYear.innerHTML = `${new Date().getFullYear()}`;
	}
}

/* === Main === */
interface Template {
	header: string;
	body: string;
}

interface MainInterface {
	onItemClick():void;
	buildTemplate():Template;
}

class MainComponent implements MainInterface {
	onItemClick ():void {
		const modal = document.querySelector('#modal') as HTMLInputElement;
		const header = modal.querySelector('#modal-header .h1') as HTMLInputElement;
		const body = modal.querySelector('#modal-body .h3') as HTMLInputElement;
		const overlay = document.querySelector('#overlay') as HTMLInputElement;

		// set data
		const htmlTemplate = this.buildTemplate();
		header.innerHTML = htmlTemplate.header;
		body.innerHTML = htmlTemplate.body;

		// visible modal view
		modal.classList.add('d-block', 'visible-transition');
		overlay.classList.add('d-block', 'visible-transition');

		// unvisible event
		const closeBtn = modal.querySelector('button.modal-close') as HTMLInputElement;
		closeBtn.addEventListener('click', () => {
			modal.classList.remove('d-block', 'visible-transition');
			overlay.classList.remove('d-block', 'visible-transition');
		});

		overlay.addEventListener('click', () => {
			modal.classList.remove('d-block', 'visible-transition');
			overlay.classList.remove('d-block', 'visible-transition');
		});
	}

	buildTemplate():Template { return {
			header: '',
			body: ''
		}; 
	};
}

class SkillComponent extends MainComponent {
	constructor() {
		super();
		const skill = document.querySelector('#skill') as HTMLInputElement;
		const htmlTemplate = this.buildTemplate();
		skill.innerHTML = htmlTemplate.header;
		skill.innerHTML = htmlTemplate.body;
	}

	buildTemplate():Template {
		const urls = SkillJSON.body.urls;
		const skills = SkillJSON.body.skills;
		const node = document.createElement('div');

		const urlList = document.createElement('ul');
		urlList.classList.add('non-list-style');
		urls.forEach((item:{ name: string, url: string }, idx: number) => {
			const li = document.createElement('li');
			const a = document.createElement('a');
			a.setAttribute('href', item.url);
			a.setAttribute('target', '_blank');
			a.setAttribute('rel', 'noopener noreferrer');
			a.classList.add('link');
			a.innerHTML = item.name;
			li.appendChild(a);
			urlList.appendChild(li);
		});

		const skillList = document.createElement('ul');
		skillList.classList.add('non-list-style');
		skills.forEach((item:string, idx: number) => {
			const li = document.createElement('li');
			li.innerHTML = item;
			skillList.appendChild(li);
		});

		node.appendChild(urlList);
		node.appendChild(skillList);
		return {
			header: SkillJSON.header,
			body: node.outerHTML
		};
	};
}

class ProfileComponent extends MainComponent {
	private profile: HTMLInputElement;
	constructor() {
		super();
		this.profile = document.querySelector('#profile') as HTMLInputElement;
		this.profile.addEventListener('click', () => { this.onItemClick(); });
	}

	buildTemplate ():Template {
		const node = document.createElement('div');
		node.classList.add('text-center');

		const logo = document.createElement('img');
		logo.setAttribute('src', ProfileJSON.body.logo);
		logo.setAttribute('alt', 'logo-img');
		logo.setAttribute('height', '150');
		logo.classList.add('d-inline-block');

		const name = document.createElement('div');
		name.classList.add('h1');
		name.innerHTML = ProfileJSON.body.name;

		const note = document.createElement('div');
		note.classList.add('my-3');
		note.innerHTML = ProfileJSON.body.note;

		node.appendChild(logo);
		node.appendChild(name);
		node.appendChild(note);
		return {
			header: ProfileJSON.header,
			body: node.outerHTML
		};
	}
}

class ContactComponent extends MainComponent {
	private contact: HTMLInputElement;
	constructor() {
		super();
		this.contact = document.querySelector('#contact') as HTMLInputElement;
		this.contact.addEventListener('click', () => { this.onItemClick(); });
	}

	buildTemplate ():Template {
		const node = document.createElement('div');
		node.classList.add('text-center');

		const text = document.createElement('div');
		text.classList.add('my-1');
		text.innerHTML = ContactJSON.body.text;

		const subText = document.createElement('div');
		subText.classList.add('my-2');
		subText.innerHTML = ContactJSON.body.subtext;

		node.appendChild(text);
		node.appendChild(subText);

		return {
			header: ContactJSON.header,
			body: node.outerHTML
		};
	}
}

/* === App Event === */
document.addEventListener('DOMContentLoaded', e => {
	const footer = new FooterComponent();
	const skill = new SkillComponent();
	const profile = new ProfileComponent();
	const contact = new ContactComponent();
});
