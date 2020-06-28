import { Base } from '../Base';
import { ProfileJsonState } from '../../assets/data';
import Link from './Link';
import User from './User';

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
    this.innerHTML = dom.replace('${this.data.header}', this.data.header);
    return;
  }
}
