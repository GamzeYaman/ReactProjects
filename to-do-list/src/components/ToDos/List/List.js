import React from "react";

function List({ todoList, onComplete, status, removeItem }) {

    return (
        <div>
                <ul className="todo-list">
                    {todoList.map((todo, i) =>(
                        <li key={i} className={todo.done ? "completed" : ""} 
                        hidden={status == "all" ? false : (status == "completed" && !todo.done) ? true : status == "active" && todo.done ? true : false}>
                        <div className="view">
                            <input className="toggle" type="checkbox" checked={todo.done} onChange={() => onComplete(i)}/>
                            <label>{todo.todo}</label>
                            <button className="destroy" onClick={() => removeItem(i)}></button>
                        </div>
                    </li>
                    ))}
                </ul>
        </div>

    )
}

export default List;