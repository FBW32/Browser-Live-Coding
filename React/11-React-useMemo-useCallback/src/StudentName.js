import React from 'react'

export default function StudentName(props) {
    console.log("from StudentName")
    return (
        <div>
            <h2>Student name: {props.name}</h2>
            <button onClick={props.changeName}>change student name</button>
        </div>
    )
}
