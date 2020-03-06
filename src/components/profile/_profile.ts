import { MainInterface } from '../main';
import { ProfileJSON } from '../../assets/data';

interface link {
	name: string;
	url: string;
}

interface JsonIF {
	header: string;
	body: {
		logo: string;
		name: string;
		note: string[];
		social_links: link[];
	};
}

export class ProfileComponent implements MainInterface {
	private profile: HTMLInputElement;
	constructor() {
		this.profile = document.querySelector('#profile') as HTMLInputElement;
	}

	render ():void {
		const json: JsonIF = ProfileJSON;

		const header = this.profile.querySelector('#profile-header') as HTMLInputElement;
		const name = this.profile.querySelector('#profile-name') as HTMLInputElement;
		const note = this.profile.querySelector('#profile-note') as HTMLInputElement;
		const logo = this.profile.querySelector('#profile-logo') as HTMLInputElement;
		const socialLinks = this.profile.querySelector('#profile-social-links') as HTMLInputElement;

		header.innerHTML = json.header;
		name.innerHTML = json.body.name;
		logo.src = json.body.logo;

		json.body.note.forEach((n: string) => {
			const p = document.createElement('p');
			p.classList.add('mr-2');
			p.innerHTML = n;
			note.append(p);
		});

		json.body.social_links.forEach((e: link) => {
			const li = document.createElement('li');
			li.classList.add('mx-2');

			const a = document.createElement('a');
			a.setAttribute('target', '_blank');
			a.setAttribute('rel', 'noopener');
			a.innerText = e.name;
			a.href = e.url;
			li.appendChild(a);
			socialLinks.append(li);
		});

		return;
	}
}
