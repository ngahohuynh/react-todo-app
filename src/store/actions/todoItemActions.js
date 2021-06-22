import { todoActionTypes } from "../actionTypes/todoActionTypes";

const addTodoAction = (title) => {
  return {
    type: todoActionTypes.add,
    title,
  };
};

const editTodoAction = (id, title) => {
  return {
    type: todoActionTypes.edit,
    id,
    title,
  };
};

const removeTodoAction = (id) => {
  return {
    type: todoActionTypes.remove,
    id,
  };
};

const toggleStatusTodoAction = (id) => {
  return {
    type: todoActionTypes.toggleStatus,
    id,
  };
};

const removeCompletedTodoAction = () => {
  return {
    type: todoActionTypes.removeCompleted,
  };
};

const todoItemActions = {
  addTodoAction,
  editTodoAction,
  removeTodoAction,
  toggleStatusTodoAction,
  removeCompletedTodoAction,
};

export default todoItemActions;
