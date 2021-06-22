import { filterActionTypes } from "../actionTypes/filterActionTypes";

const filterStatusAction = (status) => {
  return {
    type: filterActionTypes.filterStatus,
    status,
  };
};

const filterActions = {
  filterStatusAction,
};

export default filterActions;
