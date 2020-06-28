import Link from './Link';
import User from './User';
import Profile from './Profile';

export namespace ProfileComponent {
  export function init() {
    customElements.define('profile-component', Profile);
    customElements.define('social-links', Link);
    customElements.define('user-profile', User);
  }
}
