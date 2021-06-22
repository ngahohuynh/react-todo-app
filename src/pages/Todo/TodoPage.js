import { Fragment } from "react";
import TodoAddForm from "../../conponents/TodoAddForm";
import TodosList from "../../conponents/TodosList";

const TodoPage = () => {
  return (
    <Fragment>
      <header className="card">
        <h1>TODO</h1>
      </header>
      <main>
        <TodoAddForm />
        <TodosList />
      </main>
    </Fragment>
  );
};

export default TodoPage;
