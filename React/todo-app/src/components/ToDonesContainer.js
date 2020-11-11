import React from 'react'

export default function ToDonesContainer({toDones , updateItem}) {

 /* const {toDones} = props  */
    return (
        <div className="todones-container">
            <h3>BACKLOG</h3>
            {toDones.map(todone=>{
                return(
                    <div className="todones-item" key={todone.id}>
                        <p>{todone.text}</p>
                        <div className="actions">
                            <button className="btn" onClick={()=>updateItem(todone.id)}> &#8635; </button>
                        </div>
                    </div>
                )
            })}

        </div>
    )
}
