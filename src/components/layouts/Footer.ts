import { Base } from '../Base';

export default class Footer extends Base.WebComponentBase {
  constructor () {
    super();
    this._render();
  }

  protected _render(): void {
    const dom =
      `<footer id="footer">` +
        `<div class="text-center pa-2">` +
          `<span>&copy</span>` +
          `<span class="pl-1">2016 - ${new Date().getFullYear()}</span>` +
          `<span class="pl-1">hiyoko3</span>` +
        `</div>` +
      `</footer>`;

    this.innerHTML = dom;
    return;
  }
}
