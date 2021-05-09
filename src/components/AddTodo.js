import { useContext, useRef } from "react";
import TodoContext from "../store/todo-context";

const AddTodo = () => {
    const todoCtx = useContext(TodoContext);
    const inputRef = useRef();

    const addTodo = (event) => {
        event.preventDefault();
        
        todoCtx.addItem(inputRef.current.value);
        inputRef.current.value = '';
    };

    return (
        <form onSubmit={addTodo}>
            <div className="card add">
                <div className="cb-container">
                    <button id="add-btn" type="submit">+</button>
                </div>
                <div className="txt-container">
                    <label htmlFor="addt">Create todo</label>
                    <input
                        ref={inputRef}
                        type="text"
                        className="txt-input"
                        placeholder="Create a new todo..."
                        spellCheck="false"
                        autoComplete="off"
                        id="addt"
                    />
                </div>
            </div>
        </form>
    );
};

export default AddTodo;