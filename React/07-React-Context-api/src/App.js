import React, { useState ,createContext } from 'react';
import B from './B';
import B1 from './B1';

export const MyContext = createContext(null)

function App() {
console.log(MyContext)

    //lifting up the state
/*     const [data] = useState("data") */

  const [FirstChild]=useState("FirstChild")
  const [SecondChild]=useState("SecondChild")

  const [FirstGrandChild]=useState("FirstGrandChild")
  const [SecondGrandChild,setSecondGrandChild]=useState("SecondGrandChild")


  return (
    <MyContext.Provider value={
      {
      FirstChild, 
      SecondChild,
      FirstGrandChild,
      SecondGrandChild,
      setSecondGrandChild
    }
    }> 
    <div className="App">
      <h1>This is Parent</h1>
      {/* //this process of passing props down to most nested component is called props drilling */}
      <B   /* name={FirstChild} name1={FirstGrandChild} *//>
      <B1  /* name={SecondChild} name1={SecondGrandChild} *//>
    </div>
    </MyContext.Provider>
  );
}


export default App;