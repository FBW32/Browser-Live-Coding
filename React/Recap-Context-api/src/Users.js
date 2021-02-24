import React, { useEffect, useContext, useState } from 'react'
import MyContext from './Context'

export default function Users() {

    const [users,setUsers]=useState([])
    const {setUser} = useContext(MyContext)

    useEffect(()=>{
        fetch("https://reqres.in/api/users/2")
        .then(res=>res.json())
        .then(result=>setUser(result.data))


        fetch("https://reqres.in/api/users?page=2")
        .then(res=>res.json())
        .then(result=>setUsers(result.data))
    } )
    return (
        <div>
            <h1>User Page</h1>
            {users.map(user=>{
                return (<div> 
                    <h2>{user.first_name}</h2>
                    <h2>{user.last_name}</h2>
                    <img src={user.avatar} alt=""/>
                    </div>)
            })}
        </div>
    )
}
