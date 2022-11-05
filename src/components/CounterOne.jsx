import React, { useReducer } from "react";
import { Helmet } from "react-helmet-async";

const initialState = 0;
const reducer = (state, action) => {
  switch (action) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    case "reset":
      return initialState;
    default:
      return state;
  }
};

function CounterOne() {
  const [count, dispatch] = useReducer(reducer, initialState);
  return (
    <div className="container">
      <Helmet>
        <title>Counter App</title>
        <meta name="description" content="Counter App" />
        <link rel="canonical" href="./components/CounterOne" />
      </Helmet>
      <h1>Count - {count}</h1>
      <button onClick={() => dispatch("increment")}>Increment</button>
      <button onClick={() => dispatch("decrement")}>Decrement</button>
      <button onClick={() => dispatch("reset")}>Reset</button>
    </div>
  );
}

export default CounterOne;
