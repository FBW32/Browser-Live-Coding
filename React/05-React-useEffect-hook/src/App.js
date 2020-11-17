import React, { useState } from 'react';
import Timer from './Timer';

function App() {
  const [timer, setTimer]= useState(true)
  return (
    <div className="App">
      <h1>My React App</h1>
      {timer && <Timer/>}
      
      <button onClick={()=>setTimer(!timer)}>show/hide</button>
    </div>
  );
}


export default App;