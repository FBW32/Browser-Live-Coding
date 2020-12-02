import React from 'react'

export default function StudentClass(props) {
    console.log("from StudentClass")
    return (
        <div>
            <h3>Student class : {props.class}</h3>
        </div>
    )
}
