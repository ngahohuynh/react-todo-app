export const editTodoAction = (id, title) => {
  return {
    type: "EDIT",
    id,
    title,
  };
};
