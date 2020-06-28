import { Base } from '../Base';
import { SkillJsonState } from '../../assets/data';

type ProductState = {
  name: string;
  logo: string;
  desc: string;
  github: string;
  lang: string[];
};

export default class Product extends Base.WebComponentBase {
  private data: ProductState[] = SkillJsonState.body.products;

  constructor() {
    super();
    this._render();
  }

  protected _render(): void {
    let dom = `<div class="list">` + 
      `<div class="h4">製作物 / 開発実績</div>` +
      this.data.map(
        (productData) => `<p>${productData.name}</p>`
      ).join('') +
    `</div>`;

    dom += `<div id="skill-content" class="ma-3 pa-2">` +
      `<div class="pa-1 text-center"><img src="public/static/images/no_image.png" alt="product-img" id="product-logo" /></div>` +
      `<h4 class="h4" id="product-name">Productを選択すると詳細が表示されます</h4>` +
    `</div>`
    this.innerHTML = dom;
    return;
  }
}
