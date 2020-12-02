
import React, { useState,useMemo,useCallback,memo } from 'react';
import StudentName from './StudentName';
import StudentAge from './StudentAge';
import StudentClass from './StudentClass';

function App() {

  const [student,setStudent]=useState({name:"Ali",age:23,class:"fwb32"})

  const incrementAge=useCallback(()=>{
    setStudent((prevState)=>{
      return  {...prevState,age:student.age+1 } })
  },[student.age])

  const changeName=useCallback(()=>{
    setStudent((prevstate)=>{
      return {...prevstate, name:"naqvi"}
    })
  },[student.name])

    const Studentname = useMemo(()=>{
      return (<StudentName name={student.name} changeName={changeName}/>)
    },[student.name])

    const Studentage= useMemo(()=>{
      return (<StudentAge age={student.age} incrementAge={incrementAge}/>)
    },[student.age])  

    const Studentclass= useMemo(()=>{
      return (<StudentClass class={student.class}/>)
    },[student.class])


  console.log("from App")



  return (
    <div className="App">
      <h1>useMemo and useCallback</h1>
      {Studentname}
      {Studentage}
      {Studentclass}
     
    </div>
  );
}


export default App