import { useState } from "react";

const initialTodoState = {
    items: [
        {
            id: 't1',
            title: 'Code',
            completed: true
        },
        {
            id: 't2',
            title: 'Exercise',
            completed: false
        },
        {
            id: 't3',
            title: 'Meditate',
            completed: false
        },
        {
            id: 't4',
            title: 'Read for 1 hour',
            completed: true
        }
    ]
};

const TodoProvider = (props) => {
    const [todosList, setTodosList] = useState(initialTodoState);
    

};

export default TodoProvider;