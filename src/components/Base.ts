interface WebComponentInterface {}

interface ComponentInterface {
  render(): void;
}

export namespace Base {
  export abstract class ComponentBase implements ComponentInterface {
    render() {}
  }

  export abstract class WebComponentBase extends HTMLElement
    implements WebComponentInterface {
    protected template: string = '';
    // protected domParser = new DOMParser();

    /**
     * 有効にする属性値
     */
    static get observedAttributes(): string[] {
      return [];
    }

    constructor() {
      super();
      // Note: Shadow Mode を on にすると内部CSSを必ず定義しなければならない
      // this.attachShadow({ mode: 'open' });
    }

    /**
     * 属性値によってイベントをフックする。observedAttributesと併用する必要がる
     * @param attributeName
     * @param oldValue
     * @param newValue
     */
    // attributeChangedCallback(
    //   attributeName: string,
    //   oldValue: string,
    //   newValue: string
    // ): void {
    //   // 定義していないデータは処理しない
    //   if (!this.data[newValue]) return;
    //   return;
    // }
    /**
     * 描画処理
     */
    protected _render(): void {
      return;
    }
    /**
     * HTML解析
     * querySelector() などを利用できるように ParentNode でキャストする
     */
    // protected parseHTML(): ParentNode | null {
    //   const dom: HTMLDivElement = document.createElement('div');
    //   dom.innerHTML = this.template;
    //   return dom.firstChild as ParentNode | null;
    // }
  }
}
