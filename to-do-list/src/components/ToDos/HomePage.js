import React, { useEffect, useState } from 'react'
import Form from './Form/Form';
import List from './List/List';
import Footer from './Footer/Footer';

function HomePage() {
    const [todos, setTodos] = useState([])
    const [status, setStatus] = useState("all")

    const onComplete = (i) => {
        const mapped = todos.map((item, index) => index == i ? { ...item, done: !item.done } : { ...item })
        setTodos(mapped)
    }

    const onStatus = (type) => {
        if (type == "active") {
            setStatus("active")
        } else if (type == "completed") {
            setStatus("completed")
        } else {
            setStatus("all")
        }
    }

    const onClear = () => {
        const clear = todos.filter((todo) => todo.done != true)
        setTodos(clear)
    }

    const removeItem = (i) => {
        const clear = todos.filter((todo, index) => index !== i)
        setTodos(clear)
    }

    const itemCount = () => {
        return todos.filter(todo => todo.done === false).length
    }

    return (
        <div>
            <section className="todoapp">
                <header className="header">
                    <h1>todos</h1>
                    <Form addTodos={setTodos}></Form>
                </header>

                <section className="main">
                    <List todoList={todos} onComplete={onComplete} status={status} removeItem={removeItem}></List>
                </section>

                <Footer itemCount={itemCount} onStatus={onStatus} onClear={onClear}></Footer>
            </section>

            <footer className="info">
                <p>Click to edit a todo</p>
                <p>Created by <a href="https://d12n.me/">Dmitry Sharabin</a></p>
                <p>Part of <a href="http://todomvc.com">TodoMVC</a></p>
            </footer>


        </div>
    )
}

export default HomePage;