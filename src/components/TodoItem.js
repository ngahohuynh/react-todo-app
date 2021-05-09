import { Fragment, useContext, useRef, useState } from "react";
import TodoContext from "../store/todo-context";

const TodoItem = (props) => {
    const [edittable, setEdittable] = useState(false);
    const todoCtx = useContext(TodoContext);
    const editTodoInput = useRef();

    const itemClasses = `card ${props.completed ? 'checked' : ''}`;

    const onToggleStatus = () => {
        todoCtx.toggleStatus(props.id);
    };

    const onRemove = () => {
        todoCtx.removeItem(props.id);
    };

    const enableEdit = () => {
        setEdittable(true);
    };

    const onEdit = () => {
        todoCtx.editTitle(props.id, editTodoInput.current.value);
        setEdittable(false);
    }

    return (
        <li className={itemClasses}>
            <div className="cb-container">
                <input 
                    className="cb-input" 
                    type="checkbox" 
                    defaultChecked={props.completed} 
                    onClick={onToggleStatus} 
                />
                <span className="check"></span>
            </div>
            {!edittable &&
                <Fragment>
                    <p className="item">{props.title}</p>
                    {!props.completed && <button className="clear" onClick={enableEdit}>Edit</button>}
                </Fragment>
            }
            {edittable &&
                <Fragment>
                    <input ref={editTodoInput} type="text" defaultValue={props.title} />
                    <button className="clear" onClick={onEdit}>Done</button>
                </Fragment>
            }
            <button className="clear" onClick={onRemove}>Remove</button>
        </li>
    );
};

export default TodoItem;