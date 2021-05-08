import { useRef } from "react";

const AddTodo = (props) => {
    const inputRef = useRef();

    const addTodo = () => {
        props.onAddTodo(inputRef.current.value);
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