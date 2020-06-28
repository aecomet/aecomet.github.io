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
          (skillData) =>
            `<div class="d-flex">` +
              `<span class="skill-name">${skillData.name}</span>` +
              `<span class="skill-exp">${skillData.exp}</span>` +
            `</div>` +
            `<p class="skill-note">${skillData.note}</p>`
        ).join('');

    this.innerHTML = dom;
    return;
  }
}
