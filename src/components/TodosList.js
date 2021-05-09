import { Fragment, useState } from "react";
import TodoItem from "./TodoItem";

const TodosList = (props) => {
    const [statusToFilter, setStatusToFilter] = useState();

    const toggleCompleted = (id) => {
    }

    const getAll = () => {
        setStatusToFilter();
    };

    const getActiveTodos = () => {
        setStatusToFilter(false);
    };

    const getCompletedTodos = () => {
        setStatusToFilter(true);
    };

    const removeCompleted = () => {
    };

    const shownList = typeof statusToFilter === "boolean" ? 
        props.items.filter(item => item.completed === statusToFilter) : 
        props.items;
    const itemsLeft = props.items.filter(item => item.completed === false).length;

    return (
        <Fragment>
            <ul className="todos">
                {shownList.map(item => (
                    <TodoItem 
                        key={item.id}
                        id={item.id}
                        title={item.title}
                        completed={item.completed}
                        toggleStatus={toggleCompleted}
                    />
                ))}
            </ul>
            <div className="card stat">
                <p className="corner"><span id="items-left">{itemsLeft}</span> items left</p>
                <div className="filter">
                    <button id="all" className={`${typeof statusToFilter !== "boolean" ? 'on' : ''}`} onClick={getAll}>All</button>
                    <button id="active" className={`${statusToFilter === false ? 'on' : ''}`} onClick={getActiveTodos}>Active</button>
                    <button id="completed" className={`${statusToFilter === true ? 'on' : ''}`} onClick={getCompletedTodos}>Completed</button>
                </div>
                <div className="corner">
                    <button id="clear-completed">Remove Completed</button>
                </div>
            </div>
        </Fragment>
    );
};

export default TodosList;