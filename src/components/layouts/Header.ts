import { Base } from '../Base';

export default class Header extends Base.WebComponentBase {
  constructor () {
    super();
    this._render();
  }

  protected _render(): void {
    const dom =
      `<header id="header">` +
        `<div class="desktop">` +
          `<h1 class="h1 text-center">Portfolio</h1>` +
        `</div>` +
      `</header>`;

    this.innerHTML = dom;
    return;
  }
}
