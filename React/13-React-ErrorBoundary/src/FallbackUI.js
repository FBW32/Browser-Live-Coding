import React from 'react'

export default function FallbackUI(props) {
    return (
        <div>
            <h2>Fallback UI </h2>
    <h3>this is error message : {props.message}</h3>
        </div>
    )
}
