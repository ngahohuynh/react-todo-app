import { Fragment, useEffect, useState } from 'react';
import AddTodo from './components/AddTodo';
import TodosList from './components/TodosList';

function App() {
  const existingList = JSON.parse(localStorage.getItem('todos'));

  const [todosList, setTodosList] = useState(existingList ? existingList : []);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todosList));
  }, [todosList]);

  const addTodo = (title) => {
    if (!title) { return; }
    setTodosList(prevList => {
      return [...prevList, { id: Math.random().toString(36).substr(2, 9), title: title, completed: false }];
    });
  };

  const removeTodo = (id) => {
    setTodosList(prevState => prevState.filter(item => item.id !== id));
  };
  
  const toggleStatus = (id) => {
    setTodosList(prevState => {
      let newList = [...prevState];
      const index = prevState.findIndex(item => item.id === id);
      newList[index] = {
        ...newList[index],
        completed: !newList[index].completed
      };
      return newList;
    });
  };
  
  const removeCompleted = () => {
    setTodosList(prevState => prevState.filter(item => item.completed === false));
  };

  return (
    <Fragment>
      <header className="card">
        <h1>TODO</h1>
      </header>
      <main>
        <AddTodo onAddTodo={addTodo} />
        <TodosList
          items={todosList}
          onRemoveItem={removeTodo}
          onRemoveCompleted={removeCompleted}
          onToggleStatus={toggleStatus}
        />
      </main>
    </Fragment>
  );
}

export default App;
