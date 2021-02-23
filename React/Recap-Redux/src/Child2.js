import React from 'react'
import {useDispatch} from "react-redux"

export default function Child2() {
    const dispatch = useDispatch()
    return (
        <div>
            <h1>This is Child 2</h1>
            <button onClick={()=>dispatch({type:"increment",payload:5})} >Increment</button>
            <button onClick={()=>dispatch({type:"decrement",payload:2})} >Decrement</button>
        </div>
    )
}
