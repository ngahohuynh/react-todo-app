import { useRef } from "react";
import { useDispatch } from "react-redux";
import todoItemActions from "../store/actions/todoItemActions";

const TodoAddForm = () => {
  const dispatch = useDispatch();

  const inputRef = useRef();

  const addTodo = (event) => {
    event.preventDefault();

    const title = inputRef.current.value;

    if (!title) {
      return;
    }

    dispatch(todoItemActions.addTodoActionTest(title));
    inputRef.current.value = "";
  };

  return (
    <form onSubmit={addTodo}>
      <div className="card add">
        <div className="cb-container">
          <button id="add-btn" type="submit">
            +
          </button>
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

export default TodoAddForm;
