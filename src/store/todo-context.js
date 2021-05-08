import { createContext } from "react";

const todoContext = createContext({
    items: [],
    addItem: (item) => {},
    editItem: (id, newItem) => {},
    removeItem: (id) => {},
    markAsDone: (id) => {},
    filterByStatus: (completed) => {}
});

export default todoContext;