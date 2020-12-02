import React from 'react'
import {useSelector, useDispatch} from "react-redux"


 export default function Counter1() {
     const dispatch = useDispatch()
     const count = useSelector((state)=>state.count)
    return (
        <div>
            <h2>Counter : {count}  </h2>
            <button onClick={()=>dispatch({type:"increment"})}>increment</button>
        </div>
    )
} 


 