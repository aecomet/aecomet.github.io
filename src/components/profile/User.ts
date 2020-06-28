import { Base } from '../Base';
import { ProfileJsonState } from '../../assets/data';

type UserState = {
  logo: string;
  name: string;
  note: string;
  birth: number;
  gender: string;
  histories: string[];
  vision: {
    work:string[],
    wantoto: string[],
    contribution: string[]
  };
  email: {
    prefix: string;
    suffix: string;
  };
  social_links: {
    name: string;
    url: string;
  }[];
}

export default class User extends Base.WebComponentBase {
  private data: UserState = ProfileJsonState.body

  constructor () {
    super();
    this._render();
  }

  protected _render(): void {
    const dom =
      `<div class="d-flex user justify-content-space-around align-items-center">` +
        `<div class="pa-1"><img alt="profile-logo" id="profile-logo" src="${this.data.logo}"/></div>` +
        `<div class="pa-2">` +
          `<h4 class="h4">基本情報</h4>` +
          `<p class="pl-2 my-1">名前: ${this.data.name}</p>` +
          `<p class="pl-2 my-1">職種: ${this.data.note}</p>` +
          `<p class="pl-2 my-1">年齢: ${new Date().getFullYear() - this.data.birth}</p>` +
          `<p class="pl-2 my-1">性別: ${this.data.gender}</p>` +
          `<h4 class="h4 my-1">経歴</h4>` +
          `<ul>` +
            this.data.histories.map(history => `<li>${history}</li>`).join('') +
          `</ul>` +
          `<h4 class="h4 my-1">連絡</h4>` +
          `<p class="pl-2 my-1">${this.data.email.prefix}</p>` +
          `<p class="pl-2 my-1">${this.data.email.suffix}</p>` +
          `<h4 class="h4 my-2">SNS</h4>` +
          `<div class="pl-2 my-1">` +
            this.data.social_links.map(link => `<a target="_blank" rel="noopener" href="${link.url}" class="social-link">${link.name}</a>`).join('') +          `</div>` +
          `</div>` +
      `</div>`;

    this.innerHTML = dom;
    return;
  }
}