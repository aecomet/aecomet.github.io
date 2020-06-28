import User from './User';
import Profile from './Profile';

export namespace ProfileComponent {
  export function init() {
    customElements.define('profile-component', Profile);
    customElements.define('user-profile', User);
  }
}
