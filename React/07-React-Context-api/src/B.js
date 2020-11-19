import React, { useState } from 'react'
import C from './C'

export default function B(props) {
    console.log(props)
  
    return (
        <div>
            <h2>This is First Child  of App</h2>
            {/* <h3>I received this Data from App ({props.name})</h3> */}
            <C /* name1={props.name1} */ />
        </div>
    )
}
