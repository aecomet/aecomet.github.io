import { ProfileJSON, SkillJSON, ContactJSON } from '../static/data/';

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
	private skill: HTMLInputElement;
	constructor() {
		super();
		this.skill = document.querySelector('#skill') as HTMLInputElement;
		this.skill.addEventListener('click', () => { this.onItemClick(); });
	}

	buildTemplate():Template {
		const urls = SkillJSON.body.urls;
		const skills = SkillJSON.body.skills;
		const node = document.createElement('div');

		const urlList = document.createElement('ul');
		urls.forEach((item:{ name: string, url: string }, idx: number) => {
			const li = document.createElement('li');
			const a = document.createElement('a');
			a.href = item.url;
			a.innerHTML = item.name;
			li.appendChild(a);
			urlList.appendChild(li);
		});

		const skillList = document.createElement('ul');
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

		const name = document.createElement('div');
		name.classList.add('h1', 'text-center');
		name.innerHTML = ProfileJSON.body.name;

		const note = document.createElement('div');
		note.classList.add('text-center', 'my-3');
		note.innerHTML = ProfileJSON.body.note;

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

		const text = document.createElement('div');
		text.classList.add('text-center', 'my-1');
		text.innerHTML = ContactJSON.body.text;

		const subText = document.createElement('div');
		subText.classList.add('text-center', 'my-1');
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
