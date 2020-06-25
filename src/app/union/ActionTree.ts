import ActionType from './ActionType';

type ActionTree<State> = {
  [action: string]: ActionType<State>
};

export default ActionTree;
