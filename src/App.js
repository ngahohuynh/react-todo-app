import { Fragment, useState } from 'react';
import AddTodo from './components/AddTodo';
import TodosList from './components/TodosList';

const TODOS_DATA = [
  {
      id: 't1',
      title: 'Code',
      completed: true
  },
  {
      id: 't2',
      title: 'Exercise',
      completed: false
  },
  {
      id: 't3',
      title: 'Meditate',
      completed: false
  },
  {
      id: 't4',
      title: 'Read for 1 hour',
      completed: true
  }
];

function App() {
  const [todosList, setTodosList] = useState(TODOS_DATA);

  const addTodo = (title) => {
    setTodosList(prevList => {
      return [...prevList, { id: Math.random().toString(36).substr(2, 9), title: title, completed: false }];
    });
  }

  return (
    <Fragment>
      <header className="card">
        <h1>TODO</h1>
      </header>
      <main>
        <AddTodo onAddTodo={addTodo} />
        <TodosList todosList={todosList} />
      </main>
    </Fragment>
  );
}

export default App;
