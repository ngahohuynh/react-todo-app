import { useState } from 'react';
import TodoContext from './todo-context'

const initialList = [
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
];

const TodoProvider = (props) => {
    const [todosList, setTodosList] = useState(initialList);
    const [status, setStatus] = useState(null);

    const addItemHandler = (title) => {
        if (!title) {
            return;
        }
        
        setTodosList(prevState =>
            [...prevState, {
                id: Math.random().toString(36).substr(2, 9),
                title,
                completed: false
            }]
        );
    };

    const editItemHandler = (id, newTitle) => {
        setTodosList(prevState => {
            let newList = [...prevState];
            const index = prevState.findIndex(item => item.id === id);
            newList[index] = {
                ...newList[index],
                title: newTitle,
            };
            return newList;
        });
    };

    const removeItemHandler = (id) => {
        setTodosList(prevState => prevState.filter(item => item.id !== id));
    };

    const toggleStatusHandler = (id) => {
        setTodosList(prevState => {
            let newList = [...prevState];
            const index = prevState.findIndex(item => item.id === id);
            newList[index] = {
                ...newList[index],
                completed: !newList[index].completed
            };
            return newList;
        });
    };

    const filterByStatusHandler = (completed) => {
        setStatus(completed);
    }

    const removeCompletedHandler = () => {
        setTodosList(prevState => prevState.filter(item => item.completed === false));
    }

    const todoContext = {
        items: todosList,
        statusToFilter: status,
        addItem: addItemHandler,
        editTitle: editItemHandler,
        removeItem: removeItemHandler,
        toggleStatus: toggleStatusHandler,
        filterByStatus: filterByStatusHandler,
        removeCompleted: removeCompletedHandler
    };

    return (
        <TodoContext.Provider value={todoContext}>
            {props.children}
        </TodoContext.Provider>
    );
};

export default TodoProvider;