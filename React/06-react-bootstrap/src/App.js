import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";
import Header from "./Header";
import CardComponent from "./CardComponent";
import Axios from "axios";
import {ProgressBar} from "react-bootstrap"

function App() {
  const [users, setUsers] = useState([]);
  const [progress, setProgress] = useState(0);

  //componentDidMount
  useEffect(() => {
    /*     fetch("https://reqres.in/api/users")
    .then(res=>res.json())
    .then(result=>{
      console.log(result)
      setUsers(result.data)} )
    .catch(err=>console.log(err)) */

    /*  Axios.get("https://reqres.in/api/users")
    .then(result=>setUsers(result.data.data))
    .catch(err=>console.log(err)) */

    let user = {
      email: "eve.holt@reqres.in",
    };

    /* fetch("https://reqres.in/api/login", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((result) => { 
        if(result.error){
          console.log(result.error)
        }else{
           setUsers(result) 
        }
       
})
      .catch((err) => console.log(err, ".......error")); */

    Axios.post("https://reqres.in/api/login", user, {
      onUploadProgress: (ProgressEvent) => {
        console.log(ProgressEvent);
        setProgress(
          Math.floor((ProgressEvent.loaded * 100) / ProgressEvent.total)
        );
        console.log(
          Math.floor((ProgressEvent.loaded * 100) / ProgressEvent.total),
          "%"
        );
      }
    })
      .then((response) => console.log(response))
      .catch((err) =>
        console.log(err.response.data.error, "error message from axios")
      );
  }, []);

  return (
    <div>
      <Header />
    {/*   this is taken from reactbootstrap to display progress bar */}
      <ProgressBar variant="danger" now={progress} /> 
      {/* <h3>Progress bar = {progress}%</h3> */}
      <div className="row">
        {users.map((user) => {
          return <CardComponent user={user} />;
        })}
      </div>
    </div>
  );
}

export default App;
