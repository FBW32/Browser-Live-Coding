import React from 'react'
import {useSelector, useDispatch} from "react-redux"


 export default function Counter1() {
     const dispatch = useDispatch()
     const state = useSelector(state=>state)
    return (
        <div>
            <h2>Counter : {state.count}  </h2>
            <button onClick={()=>dispatch({type:"increment"})}>increment</button>
        </div>
    )
} 


 