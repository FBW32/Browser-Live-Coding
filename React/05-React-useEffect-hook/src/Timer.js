import React, { useState, useEffect } from "react";

export default function Timer() {
  const [count, setCount] = useState(0);
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  /*  useEffect(()=>{
       //just works like a render method
       console.log("render")
   }) */

useEffect(()=>{
    /* componentDidMount */
    /* (write here code) */
    return ()=>{
    /* componentWillUnmount */
    /* (write here cleanup code) */
    }
}, [])

   useEffect(() => {
        //just works like a ComponentDidMount 
        console.log("componentDidMount");
            let interval = setInterval(()=>{
                setTime(new Date().toLocaleTimeString())
                console.log("timer running")
            },1000)

            //return function excutes just before unmounting of this component, you can write code/function to cleanup all background running tasks.
            return ()=>{
                console.log("componentWillUnmount")
                clearInterval(interval)
            }
    },[]);

/*   useEffect(() => {
    //just works like as ShouldComponentUpdate
    console.log("ShouldComponentUpdate");
  }, [count]); */

  return (
    <div>
      <h2>Counter: {count} </h2>
      <button onClick={() => setCount(count+1)}>increment</button>
      <h2>Time: {time} </h2>
    </div>
  );
}
