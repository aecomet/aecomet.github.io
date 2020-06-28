import { Base } from '../Base';
import { SkillJsonState } from '../../assets/data';

type SkillState = {
  header: string;
};

export default class Skill extends Base.WebComponentBase {
  private data: SkillState = {
    header: SkillJsonState.header,
  };

  constructor() {
    super();
    this._render();
  }

  protected _render(): void {
    const dom = require('./skill.pug').default;
    this.innerHTML = dom.replace('${data.header}', this.data.header);
    return;
  }
}
