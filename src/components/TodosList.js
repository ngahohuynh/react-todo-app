import { Fragment } from "react";
import TodoItem from "./TodoItem";

const TodosList = (props) => {
    const toggleTodoCompleted = (id) => {
        const todo = props.todosList.find(item => item.id === id);
        console.log(todo);
        todo.completed = !todo.completed;
    }

    return (
        <Fragment>
            <ul className="todos">
                {props.todosList.map(item => (
                    <TodoItem 
                        key={item.id}
                        id={item.id}
                        title={item.title}
                        completed={item.completed}
                        toggleStatus={toggleTodoCompleted}
                    />
                ))}
            </ul>
            <div className="card stat">
                <p className="corner"><span id="items-left">0</span> items left</p>
                <div className="filter">
                    <button id="all" className="on">All</button>
                    <button id="active">Active</button>
                    <button id="completed">Completed</button>
                </div>
                <div className="corner">
                    <button id="clear-completed">Remove Completed</button>
                </div>
            </div>
        </Fragment>
    );
};

export default TodosList;