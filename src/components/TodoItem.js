import { useRef } from "react";

const TodoItem = (props) => {
    const cbTodo = useRef();

    const itemClasses = `card ${props.completed ? 'checked' : ''}`;

    const onToggle = () => {
        props.toggleStatus(props.id);
    };

    return (
        <li className={itemClasses}>
            <div className="cb-container">
                <input 
                    ref={cbTodo} 
                    className="cb-input" 
                    type="checkbox" 
                    defaultChecked={props.completed} 
                    onClick={onToggle} 
                />
                <span className="check"></span>
            </div>
            <p className="item">{props.title}</p>
            <button className="clear">Remove</button>
        </li>
    );
};

export default TodoItem;