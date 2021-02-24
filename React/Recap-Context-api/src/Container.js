import React,{useState} from 'react'
import MyContext from "./Context"

export default function Container(props) {
    const [user,setUser]=useState(null)
    const [isLogin,setIslogin]=useState(false)
    
    return (
        <MyContext.Provider value={{user,setUser,isLogin,setIslogin}}> 
            {props.children}
        </MyContext.Provider>
    )
}