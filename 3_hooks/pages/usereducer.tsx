import React, { useReducer } from "react";

enum ActionType {
  FACTORIAL = "FACTORIAL",
  SQRT = "SQRT",
  ADD = "ADD",
  RESET = "RESET",
}

type State = {
  result: number;
};

function factorialize(num) {
  if (num < 0) return -1;
  else if (num == 0) return 1;
  else {
    return num * factorialize(num - 1);
  }
}

const initialValue = 1;

const init = (val: number) => ({ result: val });

const Usereducer: React.FC = (): JSX.Element => {
  const [state, dispatch] = useReducer(
    (state: State, action: { type: ActionType; payload?: any }) => {
      if (action.type === ActionType.FACTORIAL) {
        console.log(action);
        return { result: factorialize(state.result) }; //
      }

      if (action.type === ActionType.SQRT) {
        console.log(action);
        return { result: Math.sqrt(state.result) };
      }

      if (action.type === ActionType.ADD) {
        console.log(action);
        return { result: state.result + 1 };
      }

      if (action.type === ActionType.RESET) {
        console.log(action);
        return init(action.payload);
      }

      return state;
    },
    initialValue,
    init
  );

  return (
    <div>
      <h1>Result: {state.result}</h1>
      <button onClick={() => dispatch({ type: ActionType.FACTORIAL })}>
        factorial
      </button>
      <button onClick={() => dispatch({ type: ActionType.ADD })}>add</button>
      <button onClick={() => dispatch({ type: ActionType.SQRT })}>sqrt</button>
      <button
        onClick={() =>
          dispatch({ type: ActionType.RESET, payload: initialValue })
        }
      >
        reset
      </button>
    </div>
  );
};

export default Usereducer;
