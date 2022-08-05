import React from "react";

function Footer({ itemCount, onStatus, onClear }){

    return(
            <footer className="footer">
                    <span className="todo-count">
                        <strong>{itemCount()}</strong>
                        {itemCount() > 1 ? "items" : "item"} left!
                    </span>

                    <ul className="filters">
                        <li>
                            <a href="#/" onClick={() => onStatus("all")}>All</a>
                        </li>
                        <li>
                            <a href="#/" onClick={() => onStatus("active")}>Active</a>
                        </li>
                        <li>
                            <a href="#/" onClick={() => onStatus("completed")}>Completed</a>
                        </li>
                    </ul>

                    <button onClick={onClear} className="clear-completed">
                        Clear completed
                    </button>
                </footer>
    )
}

export default Footer;
