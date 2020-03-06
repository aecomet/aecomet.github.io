// import { MainComponent, Template } from '../main';
// import { ContactJSON } from '../../assets/data/';

// export class ContactComponent extends MainComponent {
// 	private contact: HTMLInputElement;
// 	constructor() {
// 		super();
// 		this.contact = document.querySelector('#contact') as HTMLInputElement;
// 		this.contact.addEventListener('click', () => { this.onItemClick(); });
// 	}

// 	buildTemplate ():Template {
// 		const node = document.createElement('div');
// 		node.classList.add('text-center');

// 		const text = document.createElement('div');
// 		text.classList.add('my-1');
// 		text.innerHTML = ContactJSON.body.text;

// 		const subText = document.createElement('div');
// 		subText.classList.add('my-2');
// 		subText.innerHTML = ContactJSON.body.subtext;

// 		node.appendChild(text);
// 		node.appendChild(subText);

// 		return {
// 			header: ContactJSON.header,
// 			body: node.outerHTML
// 		};
// 	}
// }
