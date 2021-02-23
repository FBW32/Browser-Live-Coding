import React,{useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchUserData } from './Reducer/Actions'

export default function Child3() {
    const fetchedData=useSelector(state=>state.fetchedData)
    console.log(fetchedData)
    const dispatch=useDispatch()


    useEffect(()=>{
        dispatch(fetchUserData("https://jsonplaceholder.typicode.com/users"))
    },[])
    return (
        <div>
           {/*  <button onClick={()=>}>Fetch User Data</button> */}
            
            <ol>
                {fetchedData.map(user=>{
                    return(
                    <li key={user.id}>{user.name}</li>
                    )
                })}
            </ol>
        </div>
    )
}
