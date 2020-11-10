import React from 'react'
import logo from "../images/logo.png"

export default function Navigation() {
    return (
       <nav>

           <div className="left">
               <img src={logo} alt="logo image"/>
           </div>

           <div className="right">
               <a href="#">About</a>
           </div>

       </nav>
    )
}



