
import React, { useState } from 'react';
import Child1 from './Child1';
import Child2 from './Child2';
import Child3 from './Child3';

function App() {
  return (
    <div className="App">
      <h1>My React App</h1>
      <Child1 />
      <Child2 />
      <Child3/>
    </div>
  );
}


export default App;