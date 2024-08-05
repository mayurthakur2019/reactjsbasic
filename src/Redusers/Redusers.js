import React, { useReducer } from "react";

function Redusers() {
  const initialState = 0;
  const redusers = (state, actions) => {
    switch (actions) {
        case 'increment': return state+1
        case 'decrement':return state-1
        case 'reset': return initialState
        default: return state
    }
  };
  const [count, dispatch] = useReducer(redusers, initialState);

  return (
    <>
      <div>{count}</div>
      <button onClick={() => dispatch("increment")}>+</button>
      <button onClick={() => dispatch("decrement")}>-</button>
      <button onClick={() => dispatch("reset")}>/</button>
    </>
  );
}

export default Redusers;
