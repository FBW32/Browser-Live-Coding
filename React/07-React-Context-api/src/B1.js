import React from 'react'
import C1 from './C1'

export default function B1(props) {
    return (
        <div>
          <h2>This is Second Child  of App</h2>
          <h3>I received this Data from App ({props.name})</h3>
          <C1 name1={props.name1}/>
        </div>
    )
}
