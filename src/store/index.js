import { createStore } from 'redux';

const initialState = {
    todos: [],
    statusToFilter: null
};

const todoReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD':
            return {
                todos: [...state.todos, {
                    id: Math.random().toString(36).substr(2, 9),
                    title: action.title,
                    completed: false
                }],
                statusToFilter: state.statusToFilter
            };

        case 'EDIT':
            let updatedList = [...state.todos];
            const index = state.todos.findIndex(item => item.id === action.id);
            updatedList[index] = {
                ...updatedList[index],
                title: action.title
            };
            return {
                todos: updatedList,
                statusToFilter: state.statusToFilter
            };

        case 'REMOVE':
            return {
                todos: state.todos.filter(item => item.id !== action.id),
                statusToFilter: state.statusToFilter
            };

        case 'TOGGLE_STATUS':
            let newList = [...state.todos];
            const foundIndex = state.todos.findIndex(item => item.id === action.id);
            newList[foundIndex] = {
                ...newList[foundIndex],
                completed: !newList[foundIndex].completed
            };
            return {
                todos: newList,
                statusToFilter: state.statusToFilter
            };

        case 'REMOVE_COMPLETED':
            return {
                todos: state.todos.filter(item => item.completed === false),
                statusToFilter: state.statusToFilter
            };

        case 'FILTER_STATUS':
            return {
                todos: state.todos,
                statusToFilter: action.status
            };

        default:
            return state;
    }
};

const store = createStore(todoReducer);

export default store;