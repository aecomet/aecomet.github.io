import { Base } from '../Base';
import { ProfileJsonState } from '../../assets/data';

type UserState = {
  logo: string;
  name: string;
  note: string;
}

export default class User extends Base.WebComponentBase {
  private data: UserState = {
    logo: ProfileJsonState.body.logo,
    name: ProfileJsonState.body.name,
    note: ProfileJsonState.body.note
  }

  constructor () {
    super();
    this._render();
  }

  protected _render(): void {
    const dom =
      `<div class="d-flex">` +
        `<div class="pa-1"><img alt="profile-logo" id="profile-logo" src="${this.data.logo}"/></div>` +
        `<div class="mt-2">` +
          `<h4 class="h4">${this.data.name}</h4>` +
          `<div class="mr-2">${this.data.note}</div>` +
        `</div>` +
      `</div>`;

    this.innerHTML = dom;
    return;
  }
}