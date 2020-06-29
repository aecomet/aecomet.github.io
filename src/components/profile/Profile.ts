import { Base } from '../Base';
import { ProfileJsonState } from '../../assets/data';

type ProfileState = {
  header: string;
};

export default class Profile extends Base.WebComponentBase {
  private data: ProfileState = {
    header: ProfileJsonState.header,
  };

  constructor() {
    super();
    this._render();
  }

	protected _render(): void {
    const dom = require('./profile.pug').default;
    this.innerHTML = dom.replace('${data.header}', this.data.header);
    return;
  }
}
