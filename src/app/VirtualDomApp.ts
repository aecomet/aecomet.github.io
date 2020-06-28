import ActionTree from "./union/ActionTree";
import View from "./View";
import VNode from "./union/VNode";
import Controller from "./Controller";
import ActionType from "./union/ActionType";
import { ViewModel } from "./ViewModel";

export default class VirtualDomApp<State, Actions> {
  private readonly el: HTMLElement;
  private readonly view: View<State, ActionTree<State>>;
  private readonly state: State;
  private readonly actions: ActionTree<State>;
  private oldNode: VNode | undefined;
  private newNode: VNode | undefined;
  private isSkipRender: boolean = false;

  constructor(params: Controller<State>) {
    if (typeof params.el === 'string') {
      this.el = document.querySelector(params.el) as HTMLElement;
    } else {
      this.el = params.el;
    }

    this.view = params.view;
    this.state = params.state;
    this.actions = this.dispatchAction(params.actions);
    this.resolveNode();
  }

  /**
   * 新しい仮想DOMを作る
   * @param actions 
   */
  private dispatchAction(actions: ActionTree<State>): ActionTree<State> {
    const dispatched = {} as ActionTree<State>;

    for(const key in actions) {
      const action = actions[key];
      dispatched[key] = (state: State, ...data: any): ActionType<State> => {
        const ret: ActionType<State> = action(state, ...data);
        this.resolveNode();
        return ret;
      }
    }
    return dispatched;
  }

  /**
   * 仮想DOMを再構築する
   */
  private resolveNode(): void {
    this.newNode = this.view(this.state, this.actions);
    this.scheduleRender();
    return;
  }

  /**
   * レンダリングのスケジューリング
   * (連続で Actionが実行された時に、何度もDOMツリーを書き換えないため)
   */
  private scheduleRender(): void {
    if(this.isSkipRender) return;

    this.isSkipRender = true;
    setTimeout(this.render.bind(this));
    return;
  }

  /**
   * 描画処理
   */
  private render(): void {
    if (!this.newNode) return;

    if (this.oldNode) {
      ViewModel.updateElement(this.el, this.oldNode, this.newNode);
    } else {
      this.el.appendChild(ViewModel.createElement(this.newNode));
    }
    this.oldNode = this.newNode;
    this.isSkipRender = false;
    return;
  }
}
