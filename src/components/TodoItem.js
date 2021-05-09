import { useContext } from "react";
import TodoContext from "../store/todo-context";

const TodoItem = (props) => {
    const todoCtx = useContext(TodoContext);

    const itemClasses = `card ${props.completed ? 'checked' : ''}`;

    const onToggleStatus = () => {
        todoCtx.toggleStatus(props.id);
    };

    const onRemove = () => {
        todoCtx.removeItem(props.id);
    };

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
            <p className="item">{props.title}</p>
            <button className="clear" onClick={onRemove}>Remove</button>
        </li>
    );
};

export default TodoItem;