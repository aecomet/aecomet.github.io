import { Base } from '../Base';

export default class Header extends Base.WebComponentBase {
  constructor () {
    super();
    this._render();
  }

  protected _render(): void {
    const dom =
      `<header id="header">` +
        `<h1 class="h1 text-center">Portfolio</h1>` +
      `</header>`;

    this.innerHTML = dom;
    return;
  }
}
