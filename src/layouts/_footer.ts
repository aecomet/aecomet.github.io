/* === Footer === */
export class FooterComponent  {
	constructor() {
		const footerYear: HTMLInputElement = document.querySelector('footer span#year') as HTMLInputElement;
		footerYear.innerHTML = `${new Date().getFullYear()}`;
	}
}