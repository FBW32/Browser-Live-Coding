import React,{useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement } from "./Actions";
import { incrementAsnc, dataFetchAsync } from "./MiddleWare";

export default function Counter() {
   
  const dispatch = useDispatch();
  const state = useSelector((state) => state);


  useEffect(() => {
    dispatch(dataFetchAsync("https://jsonplaceholder.typicode.com/posts"))
}, [])


  return (
    <div>
      <h3>Count: {state.count}</h3>
      <button onClick={() => dispatch(incrementAsnc())}>increment</button>
      {/*    return function */}
      {/*  dispatch({type:"increment"}) */}
      <button onClick={() => dispatch(decrement())}>decrement</button>
      {/*   {type:"increment"} */}

      <div>
        {state.data.map((item) => {
          return <p key={item.id}>{item.title}</p>;
        })}
      </div>

      <button onClick={() => dispatch(dataFetchAsync("https://jsonplaceholder.typicode.com/posts"))}>fetchData</button>
    </div>
  );
}

/* function universalAcion(type, value){
    return {type:type , payload: value}
}

universalAcion("decrement",6)

let action={type:"decrement", payload: 6} */
