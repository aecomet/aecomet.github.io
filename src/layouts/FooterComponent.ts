/* === Footer === */
export class FooterComponent  {
	render () {
		const footerYear: HTMLInputElement = document.querySelector('footer span#year') as HTMLInputElement;
		footerYear.innerHTML = `${new Date().getFullYear()}`;
	}
}