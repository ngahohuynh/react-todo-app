import { todoActionTypes } from "../actionTypes/todoActionTypes";

const initialState = [];

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case todoActionTypes.add:
      return [
          ...state,
          {
            id: Math.random().toString(36).substr(2, 9),
            title: action.title,
            completed: false,
          },
        ];

    case todoActionTypes.edit:
      let updatedList = [...state];
      const index = state.findIndex((item) => item.id === action.id);
      updatedList[index] = {
        ...updatedList[index],
        title: action.title,
      };
      return updatedList;

    case todoActionTypes.remove:
      return state.filter((item) => item.id !== action.id);

    case todoActionTypes.toggleStatus:
      let newList = [...state];
      const foundIndex = state.findIndex((item) => item.id === action.id);
      newList[foundIndex] = {
        ...newList[foundIndex],
        completed: !newList[foundIndex].completed,
      };
      return newList;

    case todoActionTypes.removeCompleted:
      return state.filter((item) => item.completed === false);

    default:
      return state;
  }
};

export default todoReducer;
