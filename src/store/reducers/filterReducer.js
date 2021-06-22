import { filterActionTypes } from "../actionTypes/filterActionTypes";

const initialState = null;

const filterReducer = (state = initialState, action) => {
  if (action.type === filterActionTypes.filterStatus) {
    return action.status;
  } else {
    return state;
  }
};

export default filterReducer;
