import { createContext } from "react";

const TodoContext = createContext({
    items: [],
    statusToFilter: null,
    addItem: (title) => {},
    editTitle: (id, newTitle) => {},
    removeItem: (id) => {},
    toggleStatus: (id) => {},
    filterByStatus: (completed) => {},
    removeCompleted: () => {}
});

export default TodoContext;