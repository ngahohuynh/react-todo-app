import { Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import TodoItem from "./TodoItem";

const TodosList = () => {
  const dispatch = useDispatch();
  const todosList = useSelector((state) => state.todos);
  const statusToFilter = useSelector((state) => state.statusToFilter);

  const getAll = () => {
    dispatch({
      type: "FILTER_STATUS",
      status: null,
    });
  };

  const getActiveTodos = () => {
    dispatch({
      type: "FILTER_STATUS",
      status: false,
    });
  };

  const getCompletedTodos = () => {
    dispatch({
      type: "FILTER_STATUS",
      status: true,
    });
  };

  const removeCompleted = () => {
    dispatch({ type: "REMOVE_COMPLETED" });
  };

  const shownList =
    typeof statusToFilter === "boolean"
      ? todosList.filter((item) => item.completed === statusToFilter)
      : todosList;
  const itemsLeft = todosList.filter((item) => item.completed === false).length;

  return (
    <Fragment>
      <ul className="todos">
        {shownList.map((item) => (
          <TodoItem
            key={item.id}
            id={item.id}
            title={item.title}
            completed={item.completed}
          />
        ))}
      </ul>
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
    </Fragment>
  );
};

export default TodosList;
