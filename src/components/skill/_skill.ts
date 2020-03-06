// import { MainComponent, Template } from '../main';
// import { SkillJSON } from '../../assets/data';

// export class SkillComponent extends MainComponent {
// 	constructor() {
// 		super();
// 		const skill = document.querySelector('#skill') as HTMLInputElement;
// 		const htmlTemplate = this.buildTemplate();
// 		skill.innerHTML = htmlTemplate.header;
// 		skill.innerHTML = htmlTemplate.body;
// 	}

// 	buildTemplate():Template {
// 		const urls = SkillJSON.body.urls;
// 		const skills = SkillJSON.body.skills;
// 		const node = document.createElement('div');

// 		const urlList = document.createElement('ul');
// 		urlList.classList.add('non-list-style');
// 		urls.forEach((item:{ name: string, url: string }, idx: number) => {
// 			const li = document.createElement('li');
// 			const a = document.createElement('a');
// 			a.setAttribute('href', item.url);
// 			a.setAttribute('target', '_blank');
// 			a.setAttribute('rel', 'noopener noreferrer');
// 			a.classList.add('link');
// 			a.innerHTML = item.name;
// 			li.appendChild(a);
// 			urlList.appendChild(li);
// 		});

// 		const skillList = document.createElement('ul');
// 		skillList.classList.add('non-list-style');
// 		skills.forEach((item:string, idx: number) => {
// 			const li = document.createElement('li');
// 			li.innerHTML = item;
// 			skillList.appendChild(li);
// 		});

// 		node.appendChild(urlList);
// 		node.appendChild(skillList);
// 		return {
// 			header: SkillJSON.header,
// 			body: node.outerHTML
// 		};
// 	};
// }
