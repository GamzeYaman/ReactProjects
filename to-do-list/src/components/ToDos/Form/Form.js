import { useState, useEffect } from "react";


function Form({ addTodos }) {
    const [form, setForm] = useState()

    const onChangeInput = (e) => {
        setForm(e.target.value);
    }

    const onSubmit = (e) => {
        e.preventDefault();

        if (form.todo === "") {
            return false;
        }

        addTodos(((previousTodo) =>
             [previousTodo, {todo: form, done: false}]
        ));
        console.log(form);
        
    };


    return (

        <form onSubmit={onSubmit}>
            <input className="new-todo" name="todo" placeholder="What needs to be done?" onChange={onChangeInput} />
        </form>



    )
}

export default Form;