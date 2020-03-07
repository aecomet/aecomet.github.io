import { MainInterface } from '../main';
import { ContactJSON } from '../../assets/data/';

interface JsonIF {
	header: string;
	body: {
		text: string;
		subtext: string;
	}
}

export class ContactComponent implements MainInterface {
	private contact: HTMLInputElement;

	constructor() {
		const matchView: string = (matchMedia('(max-width:480px)').matches) ? '.mobile' : '.desktop';
		this.contact = document.querySelector(`#contact ${matchView}`) as HTMLInputElement;
	}

	render ():void {
		const json: JsonIF = ContactJSON;

		// DOM
		const header = this.contact.querySelector('#contact-header') as HTMLInputElement;
		const text = this.contact.querySelector('#contact-text') as HTMLInputElement;
		const subtext = this.contact.querySelector('#contact-subtext') as HTMLInputElement;

		// Insert JSON
		header.innerHTML = json.header;
		text.innerHTML = json.body.text;
		subtext.innerHTML = json.body.subtext;
	}
}
