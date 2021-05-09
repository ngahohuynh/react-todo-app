import { useEffect, useState } from 'react';
import TodoContext from './todo-context'

const TodoProvider = (props) => {
    const existingList = JSON.parse(localStorage.getItem('todos'));
    const [todosList, setTodosList] = useState(existingList ? existingList : []);
    const [status, setStatus] = useState(null);

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todosList));
    }, [todosList]);

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