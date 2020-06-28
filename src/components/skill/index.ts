import Skill from './Skill';
import LangExp from './LangExp';
import Product from './Product';

export namespace SkillComponent {
  export function init() {
    customElements.define('skill-component', Skill);
    customElements.define('lang-exps', LangExp);
    customElements.define('product-list', Product);
  }
}
