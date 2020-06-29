import { LayoutComponent } from './layouts';
import { ProfileComponent } from './profile';
import { SkillComponent } from './skill';
import { Base } from './Base';

class Main extends Base.WebComponentBase {
  constructor () {
    super();
    this._render();
  }

  protected _render(): void {
    const dom =
      `<main class="text-center">` +
        `<profile-component></profile-component>` +
        `<skill-component></skill-component>` +
      `</main>`;

    this.innerHTML = dom;
    return;
  }
}

export namespace MainComponent {
  export function init() {
    // render view
    LayoutComponent.init();
    ProfileComponent.init();
    SkillComponent.init();
    customElements.define('app-main', Main);
  }
}
