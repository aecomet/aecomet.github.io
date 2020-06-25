import ActionTree from './union/ActionTree';
import View from './View';

export default interface Controller<State> {
  /** 親ノード */
  el: HTMLElement | string;
  /** Viewの定義 */
  view: View<State, ActionTree<State>>;
  /** 状態管理 */
  state: State;
  /** Actionの定義 */
  actions: ActionTree<State>;
}
