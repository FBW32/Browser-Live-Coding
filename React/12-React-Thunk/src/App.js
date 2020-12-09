
import React from 'react';
import {createStore,applyMiddleware} from "redux"
import {Provider} from "react-redux"
import Reducer from './Reducer';
import Counter from './Counter';
import thunk from "redux-thunk"


const store = createStore(Reducer, applyMiddleware(thunk))
function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <h1>My React App</h1>
      <Counter/>
    </div> 
    </Provider>
  );
}


export default App;