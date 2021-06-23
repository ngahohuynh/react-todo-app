import { todoActionTypes } from "../actionTypes/todoActionTypes";

const addTodoAction = (title) => {
  return {
    type: todoActionTypes.add,
    title,
  };
};

const addTodoActionTest = (title) => {
  return (dispatch) => {
    dispatch(addTodoAction(title));
    console.log('Test Thunk Middleware');
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
  addTodoActionTest,
  editTodoAction,
  removeTodoAction,
  toggleStatusTodoAction,
  removeCompletedTodoAction,
};

export default todoItemActions;
