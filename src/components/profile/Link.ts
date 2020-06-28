import { Base } from '../Base';
import { ProfileJsonState } from '../../assets/data';

type LinkState = {
  name: string;
  url: string;
};

export default class Link extends Base.WebComponentBase {
  private data: LinkState[] = ProfileJsonState.body.social_links;

  constructor () {
    super();
    this._render();
  }

  protected _render(): void {
    const dom =
      `<ul id="profile-social-links">` +
        this.data.map(
          (linkData) => `<li class="mx-2">
            <a target="_blank" rel="noopener" href="${linkData.url}">${linkData.name}</a>
          </li>`
        ).join('') +
      `</ul>`;

    this.innerHTML = dom;
    return;
  }
}
