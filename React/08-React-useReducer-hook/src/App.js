import React, { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  //event handler
  const increment=()=>{
    setCount(count+1)
  }
  const decrement=()=>{
    setCount(count-1)
  }
  const reset=()=>{
    setCount(0)
  }
  return (
    <div className="App">
      <h1>useReducer Hook</h1>
      <h2>Counter : {count}</h2>
      <button onClick={increment}>increment</button>
      <button onClick={decrement}>decrement</button>
      <button onClick={reset}>reset</button>
    </div>
  );
}

export default App;
