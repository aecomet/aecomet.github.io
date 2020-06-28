interface WebComponentInterface {}

export namespace Base {
  export abstract class WebComponentBase extends HTMLElement
    implements WebComponentInterface {

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
     * テンプレート解析
     * 変数があれば展開する
     * FIXME: 配列展開さえできれば実用化可能
     */
    protected parseTemplate(template: string, data: any): string {
      const regexp: RegExp = new RegExp(`\\$` + `{data.(${Object.keys(data).join('|')})}`, 'g');

      return template.replace(regexp, (s:string):string => {
        // 変数のkeyを取得
        const key:string = s.split('.')[1].split('}')[0];
        return data[key];
      });
    }
  }
}
