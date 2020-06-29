import VNode from './union/VNode';

export default interface View<State, Actions> {
  (state: State, actions: Actions): VNode;
}
