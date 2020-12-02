import React from 'react'

export default function StudentAge(props) {
    console.log("from StudentAge")
    return (
        <div>
            <h3>Student age: {props.age}</h3>
            <button onClick={props.incrementAge}>increment age</button>
        </div>
    )
}
