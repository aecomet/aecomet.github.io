type ActionType<State> = (state: State, ...data: any) => void | any;

export default ActionType;
