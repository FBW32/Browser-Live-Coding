import React, { useState } from "react";
import Counter1 from "./Counter";
import { createStore } from "redux";
import {Provider} from "react-redux"

const initialState = { count: 0 };

const reducer = (state=initialState, action) => {
  console.log(action.type)
  switch (action.type) {
    case "increment":
      return { ...state, count: state.count+1 }
    case "decrement":
      return {...state,count:state.count-1}
    default:
      return state
  }
};

const myStore = createStore(reducer);

function App() {
  return (
/*     <Mycontext.Provider value={{data}}> </Mycontext.Provider> */
    <Provider store={myStore} > 
    <div className="App">
      <h1>My React App</h1>
      <Counter1/>
    </div>
    </Provider>
  );
}

export default App;
