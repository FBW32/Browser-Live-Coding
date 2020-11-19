import React,{useContext} from 'react'
import {MyContext} from "./App"

export default function C() {
            //useContext hook to get all data from context
            //destructuring way
           const { FirstGrandChild,setSecondGrandChild } = useContext(MyContext)

    return (
        <div>
            <h3>This is first Grandchild of App</h3>
            <h3>I received this Data from Context ({FirstGrandChild})</h3>
            <button onClick={()=>setSecondGrandChild("ThirdGrandChild")}>change second granch child name</button>
        </div>
    )
}
