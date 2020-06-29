import { Base } from '../Base';
import { SkillJsonState } from '../../assets/data';

type LangState = {
  name: string;
  exp: number;
  note: string;
};

export default class LangExp extends Base.WebComponentBase {
  private data: LangState[] = SkillJsonState.body.langexps;
  constructor () {
    super();
    this._render();
  }

  protected _render(): void {
    const dom =
        this.data.map(
          skill =>
            `<div class="skill-item pa-1">` +
              `<div class="d-flex align-items-center">` +
                `<span class="d-block"><strong>${skill.name}</strong></span>` +
                `<progress class="ml-2 skill-exp" max="100" value="${skill.exp * 10}">${skill.exp}年</progress>` +
                `<span class="ml-2 h5">${skill.exp} 年</span>` +
              `</div>` +
              `<p class="mt-1 skill-note">${skill.note}</p>` +
            `</div>`
          ).join('');

    this.innerHTML = dom;
    return;
  }
}
