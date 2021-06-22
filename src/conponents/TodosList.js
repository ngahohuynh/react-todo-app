import { Fragment } from "react";
import { useSelector } from "react-redux";
import TodoItem from "./TodoItem";
import TodoStat from "./TodoStat";

const TodosList = () => {
  const todosList = useSelector((state) => state.todos);
  const statusToFilter = useSelector((state) => state.filter);

  const shownList =
    typeof statusToFilter === "boolean"
      ? todosList.filter((item) => item.completed === statusToFilter)
      : todosList;

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
      <TodoStat todosList={shownList} statusToFilter={statusToFilter} />
    </Fragment>
  );
};

export default TodosList;
