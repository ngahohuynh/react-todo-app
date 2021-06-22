import { Fragment, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { editTodoAction } from "../store/actions/todoItemActions";
import { todoActionTypes } from "../store/actionTypes/todoActionTypes";

const TodoItem = (props) => {
  const [edittable, setEdittable] = useState(false);
  const cbTodo = useRef();
  const editTodoInput = useRef();

  const dispatch = useDispatch();

  const itemClasses = `card ${props.completed ? "checked" : ""}`;

  const onToggleStatus = () => {
    dispatch({
      type: todoActionTypes.toggleStatus,
      id: props.id,
    });
  };

  const onRemove = () => {
    dispatch({
      type: todoActionTypes.remove,
      id: props.id,
    });
  };

  const enableEdit = () => {
    setEdittable(true);
  };

  const onEdit = () => {
    dispatch(editTodoAction(props.id, editTodoInput.current.value));
    setEdittable(false);
  };

  return (
    <li className={itemClasses}>
      <div className="cb-container">
        <input
          ref={cbTodo}
          className="cb-input"
          type="checkbox"
          defaultChecked={props.completed}
          onClick={onToggleStatus}
        />
        <span className="check"></span>
      </div>
      {!edittable && (
        <Fragment>
          <p className="item">{props.title}</p>
          {!props.completed && (
            <button className="clear" onClick={enableEdit}>
              Edit
            </button>
          )}
        </Fragment>
      )}
      {edittable && (
        <Fragment>
          <input ref={editTodoInput} type="text" defaultValue={props.title} />
          <button className="clear" onClick={onEdit}>
            Done
          </button>
        </Fragment>
      )}
      <button className="clear" onClick={onRemove}>
        Remove
      </button>
    </li>
  );
};

export default TodoItem;
