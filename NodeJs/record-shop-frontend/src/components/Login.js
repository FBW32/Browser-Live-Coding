import React, { useState,useContext } from "react";
import { MyContext } from "../App";

export default function Login(props) {
    const {setIsLogin ,setUserData, setToken} =useContext(MyContext)

    const [user, setUser] = useState({
      email: "",
      password: ""
    });
  


    const submitForm = (e) => {
      e.preventDefault();
  
      /* AJAX */
      fetch("/login", {
        method: "POST",
        headers:{ "Content-Type" : "application/json" }, 
        body: JSON.stringify(user),
      })
        .then((res) => {
          console.log(res.headers.get("x-auth"))
          let headertoken = res.headers.get("x-auth")
          setToken(headertoken)
          localStorage.setItem("token",headertoken)
          return res.json()
        })
        .then((response) => {
          if(response.success){
            console.log(response.user)
            //storing user into context
            setUserData(response.user)
            setIsLogin(true)
            let obj={
              islogin:true,
              user:response.user
            }
    
            localStorage.setItem("userdata",JSON.stringify(obj))
  
            props.history.push("/profile")
          }else{
            console.log(response)
          }
        }).catch(err=>console.log(err))
      /*     const formData = new FormData(e.target)
  
      let user= {  address:{}  }
  
     for(let pair of formData){
        if(pair[0]==="city"|| pair[0]==="street"){
             user.address[pair[0]]=pair[1]
        }else{
            user[pair[0]]=pair[1]
        }
        
     } 
     console.log(user)
   */
    }; //ending submitform
  
    const grabValue = (e) => {
      setUser({ ...user, [e.target.name]: e.target.value });
    };
  
    return (
      <div>
        <h1>Login</h1>
        <form onSubmit={submitForm}>
       
          <label>
            Email :{" "}
            <input
              type="email"
              name="email"
              required
              placeholder="E-mail"
              onChange={grabValue}
            />
          </label>
          <br />
  
          <label>
            Password :
            <input
              type="password"
              name="password"
              required
              placeholder="Password"
              onChange={grabValue}
            />
          </label>
          <br />
  
          <input type="submit" value="login" />
        </form>
      </div>
    );
}
