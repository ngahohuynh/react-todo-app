import { Fragment, useContext, useEffect } from "react";
import TodoContext from "../store/todo-context";
import TodoItem from "./TodoItem";

const TodosList = () => {
    const todoCtx = useContext(TodoContext);

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todoCtx.items));
    }, [todoCtx.items]);

    const getAll = () => {
        todoCtx.filterByStatus();
    };

    const getActiveTodos = () => {
        todoCtx.filterByStatus(false);
    };

    const getCompletedTodos = () => {
        todoCtx.filterByStatus(true);
    };

    const removeCompleted = () => {
        todoCtx.removeCompleted();
    };

    const statusToFilter = todoCtx.statusToFilter;
    const shownList = typeof statusToFilter === "boolean" ? 
        todoCtx.items.filter(item => item.completed === statusToFilter) : 
        todoCtx.items;
    const itemsLeft = todoCtx.items.filter(item => item.completed === false).length;

    return (
        <Fragment>
            <ul className="todos">
                {shownList.map(item => (
                    <TodoItem 
                        key={item.id}
                        id={item.id}
                        title={item.title}
                        completed={item.completed}
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
                    <button id="clear-completed" onClick={removeCompleted}>Remove Completed</button>
                </div>
            </div>
        </Fragment>
    );
};

export default TodosList;