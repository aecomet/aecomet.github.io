import Header from './Header';
import Footer from './Footer';

export namespace LayoutComponent {
  export function init() {
    customElements.define('app-header', Header);
    customElements.define('app-footer', Footer);
  }
}
