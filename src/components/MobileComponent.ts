export class MobileComponent {
	private views: HTMLInputElement[] = [];
	private viewIdx: number = 0;

	constructor() {
		// If we handle mobile view, the main starts flick module
		if (matchMedia('(max-width:480px)').matches) this.onSwipe();
		this.views = [
			document.querySelector('#profile') as HTMLInputElement,
			document.querySelector('#skill') as HTMLInputElement,
			document.querySelector('#contact') as HTMLInputElement
		];
	}

	private onSwipe(): void {
		const main = document.querySelector('#main') as HTMLInputElement;
		const DISTANCE: number = 150;
		let startX: number = 0;
		let endX: number = 0;

		main.addEventListener('touchstart', e => {
			startX = e.touches[0].pageX;
		});

		main.addEventListener('touchmove', e => {
			endX = e.changedTouches[0].pageX;
		});

		main.addEventListener('touchend', e => {
			if (endX == 0) return;

			if (startX > (endX + DISTANCE)) {
				// left swipe
				this.viewChanger(main, 'left');
			} else if ((startX + DISTANCE) < endX) {
				// right swipe
				this.viewChanger(main, 'right');
			}

			startX = endX = 0;
		});
	}

	private viewChanger(main: HTMLInputElement, state: string): void {
		// invisible current view 
		this.views[this.viewIdx].classList.add('d-none');
		this.views[this.viewIdx].classList.remove('d-block');

		switch (state) {
			case 'left':
				this.viewIdx = (this.viewIdx >= (this.views.length - 1)) ? 0 : (this.viewIdx + 1);
				break;
			case 'right':
				this.viewIdx = (this.viewIdx <= 0) ? (this.views.length - 1) : (this.viewIdx - 1);
				break;
		}

		// visible new view
		this.views[this.viewIdx].classList.remove('d-none');
		this.views[this.viewIdx].classList.add('d-block');
	}
}
