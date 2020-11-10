import React from 'react'

export default function ToDosContainer() {

    const ToDos=[
        {id:1, text:"Breakfast", done:false},
        {id:2, text:"Start Lesson", done:false},
        {id:3, text:"Live coding", done:false},
        {id:4, text:"Lunch break", done:false}
    ]
    return (
        <div className="todos-container">

                <form className="todo-form">
                    <label className="input-item">
                        <input type="text" name="todo"/>
                    </label>
                    <input className="btn" type="submit" value="ADD"/>
                </form>

                <div className="todos">
                    <h3>TO DO</h3>
                    {ToDos.map(todo=>{
                        return(
                            <div className="todo-item" key={todo.id}> 
                                <p>{todo.text}</p>
                                <div className="actions">
                                    <button className="btn"> &#10004; </button>
                                </div>
                            </div>
                        )
                    })}
                </div>
        </div>
    )
}
