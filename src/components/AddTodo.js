import { useContext, useRef } from "react";
import TodoContext from "../store/todo-context";

const AddTodo = () => {
    const todoCtx = useContext(TodoContext);
    const inputRef = useRef();

    const addTodo = () => {
        todoCtx.addItem(inputRef.current.value);
        inputRef.current.value = '';
    };

    return (
        <div className="card add">
            <div className="cb-container">
                <button id="add-btn" onClick={addTodo}>+</button>
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
    );
};

export default AddTodo;