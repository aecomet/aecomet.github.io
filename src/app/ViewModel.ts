import VNode from './union/VNode';
import Attributes from './union/Attributes';
import NodeType from './union/NodeType';
import DiffType from './union/DiffType';

export namespace ViewModel {
  /**
   * 仮想DOM生成
   * @param nodeName ノード名(tag)
   * @param attributes 属性
   * @param children 子ノード
   * @returns { ElementTagNameMap, Attributes, NodeType[] } 仮想DOMツリー
   */
  export function h(
    nodeName: keyof ElementTagNameMap,
    attributes: Attributes,
    ...children: NodeType[]
  ): VNode {
    return { nodeName, attributes, children };
  }

  /**
   * DOMを生成する
   * @param node 仮想ノード
   * @returns HTMLElement | Text DOM
   */
  export function createElement(node: NodeType): HTMLElement | Text {
    if (!isVNode(node)) return document.createTextNode(node.toString());

    const el = document.createElement(node.nodeName);
    // 属性値セット
    const setAttributes = (target: HTMLElement, attrs: Attributes): void => {
      for (const attr in attrs) {
        // on*** はイベントとして取り扱う
        const isEvent: boolean = isEventAttr(attr);

        if (isEvent) {
          const eventName: string = attr.slice(2);
          target.addEventListener(eventName, attrs[attr] as EventListener);
        } else {
          target.setAttribute(attr, attrs[attr] as string);
        }
      }
      return;
    };
    // 属性値の反映
    setAttributes(el, node.attributes);
    node.children.forEach((child) => el.appendChild(createElement(child)));

    return el;
  }

  /**
   * 仮想DOMの差分を検知し、リアルDOMに反映する
   * @param parent 親要素
   * @param oldNode 更新対象DOM
   * @param newNode 更新後のDOM
   * @param index
   */
  export function updateElement(
    parent: HTMLElement,
    oldNode: NodeType,
    newNode: NodeType,
    index: number = 1
  ): void {
    // oldNodeがない場合は新しいノードを返す
    if (!oldNode) {
      parent.appendChild(createElement(newNode));
    }

    const target = parent.childNodes[index];

    // newNodeがない場合、該当ノードを削除
    if (!newNode) {
      parent.removeChild(target);
      return;
    }

    // 差分検知後、更新処理
    // 属性値の更新
    const updateAttributes = (
      target: HTMLElement,
      oldAttrs: Attributes,
      newAttrs: Attributes
    ): void => {
      // remove Attributes
      for (const attr in oldAttrs) {
        if (isEventAttr(attr)) continue;
        target.removeAttribute(attr);
      }

      // set attrs
      for (const attr in newAttrs) {
        if (isEventAttr(attr)) continue;
        target.setAttribute(attr, newAttrs[attr] as string);
      }
    };
    // 値の更新
    const updateVlaue = (target: HTMLInputElement, newValue: string): void => {
      target.value = newValue;
      return;
    };
    const diffType: number = detectDiff(oldNode, newNode);
    switch (diffType) {
      case DiffType.Type || DiffType.Text || DiffType.Node:
        parent.replaceChild(createElement(newNode), target);
        break;
      case DiffType.Value:
        // valueの変更時にNodeを置き換えてしまうとフォーカスが外れてしまうため
        updateVlaue(
          target as HTMLInputElement,
          (newNode as VNode).attributes.value as string
        );
        break;
      case DiffType.Attr:
        // 属性の変更は、Nodeを再作成する必要がないので更新するだけ
        updateAttributes(
          target as HTMLInputElement,
          (newNode as VNode).attributes,
          (oldNode as VNode).attributes
        );
        break;
      default:
        break;
    }

    //　再帰的にupdateElementを呼び出し、childrenの更新処理を行う
    if (isVNode(oldNode) && isVNode(newNode)) {
      const max: number = Math.max(
        oldNode.children.length,
        newNode.children.length
      );
      for (let i = 0; i < max; i++) {
        updateElement(
          target as HTMLElement,
          oldNode.children[i],
          newNode.children[i]
        );
      }
    }
    return;
  }

  /**
   * 2つの仮想DOMの差分を見る
   * @param a
   * @param b
   * @returns number : 異なっている値
   */
  function detectDiff(a: NodeType, b: NodeType): number {
    // 型が違う
    if (typeof a !== typeof b) return DiffType.Type;
    // 異なる文字列
    if (!isVNode(a) && a !== b) return DiffType.Text;
    if (isVNode(a) && isVNode(b)) {
      // 異なるノード
      if (a.nodeName !== b.nodeName) return DiffType.Node;
      // 異なる値
      if (a.attributes.value !== b.attributes.value) return DiffType.Value;
      // 異なる属性
      // Note: JSON.stringify は プロパティの順序をランダムにするが、ここでは厳密なチェックを必要としないので JSON.stringify で問題ない
      if (JSON.stringify(a.attributes) !== JSON.stringify(b.attributes))
        return DiffType.Attr;
    }

    // その他
    return DiffType.None;
  }

  /**
   * 型チェック
   * @param node DOM
   * @returns 真偽値
   */
  function isVNode(node: NodeType): node is VNode {
    return typeof node !== 'string' && typeof node !== 'number';
  }

  /**
   * 属性値がイベントであるかチェック
   * @param attr DOMの属性名
   */
  function isEventAttr(attr: string): boolean {
    // onから始まる属性名はイベントとして扱う
    return /^on/.test(attr);
  }
}
