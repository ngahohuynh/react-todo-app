import { useDispatch } from "react-redux";
import { todoActionTypes } from "../store/actionTypes/todoActionTypes";

const TodoStat = ({ todosList, statusToFilter }) => {
  const dispatch = useDispatch();

  const getAll = () => {
    dispatch({
      type: todoActionTypes.filterStatus,
      status: null,
    });
  };

  const getActiveTodos = () => {
    dispatch({
      type: todoActionTypes.filterStatus,
      status: false,
    });
  };

  const getCompletedTodos = () => {
    dispatch({
      type: todoActionTypes.filterStatus,
      status: true,
    });
  };

  const removeCompleted = () => {
    dispatch({ type: todoActionTypes.removeCompleted });
  };

  const itemsLeft = todosList.filter((item) => item.completed === false).length;

  return (
    <div className="card stat">
      <p className="corner">
        <span id="items-left">{itemsLeft}</span> items left
      </p>
      <div className="filter">
        <button
          id="all"
          className={`${typeof statusToFilter !== "boolean" ? "on" : ""}`}
          onClick={getAll}
        >
          All
        </button>
        <button
          id="active"
          className={`${statusToFilter === false ? "on" : ""}`}
          onClick={getActiveTodos}
        >
          Active
        </button>
        <button
          id="completed"
          className={`${statusToFilter === true ? "on" : ""}`}
          onClick={getCompletedTodos}
        >
          Completed
        </button>
      </div>
      <div className="corner">
        <button id="clear-completed" onClick={removeCompleted}>
          Remove Completed
        </button>
      </div>
    </div>
  );
};

export default TodoStat;
