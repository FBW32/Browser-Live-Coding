import React, { useState } from 'react'
import Grandchild1 from './Grandchild1'
import { useSelector, useDispatch } from 'react-redux'

export default function Child1() {
    const data = useSelector(state=>state.data)
    const dispatch=useDispatch()

    const [inputValue,setInputValue] = useState("")
    return (
        <div>
            <h1>This is Child 1</h1>
            <ul>
                {data.map((item,i)=>{
                    return(
                    <li key={item} onClick={()=>dispatch({type:"remove",payload:i})}>{item}</li>
                    )
                })}
            </ul>
            <input type="text" onChange={(e)=>setInputValue(e.target.value)}/>
            <button onClick={()=>dispatch({type:"add",payload:inputValue})}> Add item</button>
            <Grandchild1 />
        </div>
    )
}
