import { Base } from '../Base';
import { SkillJsonState } from '../../assets/data';

type ProductState = {
  name: string;
  logo: string;
  desc: string;
  github: string;
  langs: string[];
};

export default class Product extends Base.WebComponentBase {
  private data: ProductState[] = SkillJsonState.body.products;
  private logo: HTMLInputElement | null = null;
  private desc: HTMLInputElement | null = null;
  private github: HTMLAnchorElement | null = null;
  private langs: HTMLInputElement | null = null;
  private static _this: Product | null = null;

  constructor() {
    super();
    this._render();
    Product._this = this;
  }

  connectedCallback() {
    // イベントの追加
    const productNames: NodeList = document.querySelectorAll('.product-name');
    productNames.forEach(product => product.addEventListener('click', this.setImg));
  }

  protected _render(): void {
    const dom = 
      `<div id="product-field" class="pa-2 d-flex">` +
        `<div class="product-list">` + 
          this.data.map((product, idx) => `<p class="py-1 h4 product-name" data-key="${idx}">${product.name}</p>`).join('') +
        `</div>` +
        `<div class="ma-3 pa-2 product-content text-left">` +
          `<div class="pa-1 text-center"><img src="public/static/images/no_image.png" alt="product-img" id="product-logo" /></div>` +
          `<p class="my-1" id="product-desc">Productを選択すると詳細が表示されます</p>` +
          `<p class="my-2 d-none" id="product-lang"></p>` +
          `<a href="#" target="_blank" rel="noopener" id="product-github" class="my-1 d-none"><i class="mr-1 fab fa-github-alt"></i>Github<i class="ml-1 fab fa-github-alt"></i></a>` +
        `</div>` +
      `</div>`;
    this.innerHTML = dom;
    return;
  }

  /**
   * 画像の切り替え
   */
  private setImg(): void {
    const key: number = parseInt(this.dataset.key || '');
  
    if (key === NaN || Product._this == null) return;
  
    const product: ProductState = Product._this.data[key];
    if (Product._this.logo === null) Product._this.logo = document.querySelector('#product-logo') as HTMLInputElement;
    if (Product._this.desc === null) Product._this.desc = document.querySelector('#product-desc') as HTMLInputElement;
    if (Product._this.langs === null) Product._this.langs = document.querySelector('#product-lang') as HTMLInputElement;
    if (Product._this.github === null) Product._this.github = document.querySelector('#product-github') as HTMLAnchorElement;

    Product._this.logo.src = product.logo;
    Product._this.desc.innerHTML = product.desc;
    Product._this.langs.innerHTML = product.langs.map(lang => `<span>${lang}</span>`).join('');
    Product._this.github.href = product.github;

    // display on
    Product._this.desc.classList.remove('d-none');
    Product._this.langs.classList.remove('d-none');
    Product._this.github.classList.remove('d-none');
  }
}
