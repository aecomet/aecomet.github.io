import { MainInterface } from '../main';
import { SkillJSON } from '../../assets/data';

interface product {
	name: string;
	logo: string;
	desc: string;
	github: string;
	lang: string[];
}

interface JsonIF {
	header: string;
	body: {
		skills: string[];
		products: product[]
	}
}

export class SkillComponent implements MainInterface {
	skill: HTMLInputElement;

	constructor() {
		const matchView: string = (matchMedia('(max-width:480px)').matches) ? '.mobile' : '.desktop';
		this.skill = document.querySelector(`#skill ${matchView}`) as HTMLInputElement;
	}

	render (): void {
		const json: JsonIF = SkillJSON;

		// DOM
		const header = this.skill.querySelector('#skill-header') as HTMLInputElement;

		const skillList = this.skill.querySelector('#skill-list') as HTMLInputElement;
		const productList = this.skill.querySelector('#product-list') as HTMLInputElement;

		// Insert JSON
		header.innerHTML = json.header;

		json.body.skills.forEach((skill: string) => {
			const li = document.createElement('li');
			li.innerHTML = skill;
			skillList.append(li);
		});

		json.body.products.forEach((product: product) => {
			const li = document.createElement('li');
			li.innerHTML = product.name;
			li.addEventListener('click', e => { this.setContent(product); });

			productList.append(li);
		});
	}

	private setContent(product: product): void {
		// DOM
		const logo = this.skill.querySelector('#product-logo') as HTMLInputElement;
		const lang = this.skill.querySelector('#product-lang') as HTMLInputElement;
		const name = this.skill.querySelector('#product-name') as HTMLInputElement;
		const desc = this.skill.querySelector('#product-desc') as HTMLInputElement;
		const github = this.skill.querySelector('#product-github') as HTMLAnchorElement;

		logo.src = product.logo;
		name.innerHTML = product.name;
		desc.innerHTML = product.desc;

		if (product.github != "") {
			github.href = product.github;
			github.classList.add('d-inline-block');
			github.classList.remove('d-none');
		} else {
			github.classList.add('d-none');
			github.classList.remove('d-inline-block');
		}

		lang.innerHTML = '';
		product.lang.forEach((l: string) => {
			const span = document.createElement('span');
			span.innerHTML = l;
			lang.append(span);
		});
	}
}
