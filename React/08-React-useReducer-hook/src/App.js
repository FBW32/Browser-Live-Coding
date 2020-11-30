import React, { useReducer } from "react";
import {initialValue,reducer} from "./Reducer"

function App() {
  const [count, Dispatch] = useReducer(reducer, initialValue)
  return (
    <div className="App">
      <h1>useReducer Hook</h1>
      <h2>Counter : {count} </h2>
     {/*  //dipatching actions */}
      <button onClick={()=>Dispatch("increment")}>increment</button>
      <button onClick={()=>Dispatch("decrement")} >decrement</button>
      <button  onClick={()=>Dispatch("reset")} >reset</button>
    </div>
  );
}

export default App;
