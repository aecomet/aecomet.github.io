import { ModuleInterface } from './main';

class ModalModule implements ModuleInterface {
	private body: HTMLInputElement;
	private help: HTMLInputElement;
	private modal: HTMLInputElement;
	private overlay: HTMLInputElement;

	constructor() {
		this.body = document.body as HTMLInputElement;
		this.help = this.body.querySelector('#help') as HTMLInputElement;
		this.modal = this.body.querySelector('#modal') as HTMLInputElement;
		this.overlay = this.body.querySelector('#overlay') as HTMLInputElement;
	}

	public handler(): void {
		this.help.addEventListener('click', e => {
			this.body.classList.add('no-scroll');
			this.modal.classList.add('d-block', 'visible-transition');
			this.overlay.classList.add('d-block', 'visible-transition');	
		})

		this.overlay.addEventListener('click', () => {
			this.body.classList.remove('no-scroll');
			this.modal.classList.remove('d-block', 'visible-transition');
			this.overlay.classList.remove('d-block', 'visible-transition');
		});
	}
}

export class MobileComponent {
	private views: HTMLInputElement[] = [];
	private viewIdx: number = 0;

	private breadcrumbs?: HTMLInputElement;
	private modalModule?: ModalModule;

	constructor() {
		// If we handle mobile view, the main starts flick module
		if (!matchMedia('(max-width:480px)').matches) return;
		
		this.views = [
			document.querySelector('#profile') as HTMLInputElement,
			document.querySelector('#skill') as HTMLInputElement,
			document.querySelector('#contact') as HTMLInputElement
		];

		this.breadcrumbs = document.querySelector('.breadcrumbs') as HTMLInputElement;
		this.modalModule = new ModalModule();

		this.onSwipe();
		this.modalModule.handler();
	}

	private onSwipe(): void {
		const main = document.querySelector('#main') as HTMLInputElement;
		const DISTANCE: number = 120;
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
		const prevView = this.views[this.viewIdx];
		prevView.classList.add('d-none');
		prevView.classList.remove('d-block');
		this.setBreadcrumb(prevView);

		switch (state) {
			case 'left':
				this.viewIdx = (this.viewIdx >= (this.views.length - 1)) ? 0 : (this.viewIdx + 1);
				break;
			case 'right':
				this.viewIdx = (this.viewIdx <= 0) ? (this.views.length - 1) : (this.viewIdx - 1);
				break;
		}

		// visible new view
		const nextView = this.views[this.viewIdx];
		nextView.classList.add('d-block');
		nextView.classList.remove('d-none');
		this.setBreadcrumb(nextView);
	}


	private setBreadcrumb(view: HTMLInputElement): void {
		const pageId = view.getAttribute('id');
		const breadcrumb = this.breadcrumbs?.querySelector(`span[data-target="${pageId}"]`) as HTMLInputElement;

		breadcrumb.classList.toggle('active');
	}
}
