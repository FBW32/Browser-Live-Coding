import React, { useContext } from 'react'
import MyContext from './Context'

export default function Profile() {

    const {user}=useContext(MyContext)

    return (
        <div>
            <h1>Profile Page</h1>
            {user && (<div> 
            <h2>{user.first_name}</h2>
            <h2>{user.last_name}</h2>
            <img src={user.avatar} alt=""/>
            </div>) }
        </div>
    )
}
