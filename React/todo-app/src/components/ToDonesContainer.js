import React from 'react'

export default function ToDonesContainer() {

    const ToDones=[
        {id:1, text:"Coding Practice" ,done:true},
        {id:2, text:"Exercises" ,done:true},
        {id:3, text:"Project" ,done:true},

    ]

    return (
        <div className="todones-container">
            <h3>BACKLOG</h3>
            {ToDones.map(todone=>{
                return(
                    <div className="todones-item" key={todone.id}>
                        <p>{todone.text}</p>
                        <div className="actions">
                            <button className="btn"> &#8635; </button>
                        </div>
                    </div>
                )
            })}

        </div>
    )
}
