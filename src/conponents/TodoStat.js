import { useDispatch } from "react-redux";
import filterActions from "../store/actions/filterActions";
import todoItemActions from "../store/actions/todoItemActions";

const TodoStat = ({ todosList, statusToFilter }) => {
  const dispatch = useDispatch();

  const getAll = () => {
    dispatch(filterActions.filterStatusAction(null));
  };

  const getActiveTodos = () => {
    dispatch(filterActions.filterStatusAction(false));
  };

  const getCompletedTodos = () => {
    dispatch(filterActions.filterStatusAction(true));
  };

  const removeCompleted = () => {
    dispatch(todoItemActions.removeCompletedTodoAction());
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
