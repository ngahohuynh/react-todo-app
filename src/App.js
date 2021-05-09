import AddTodo from './components/AddTodo';
import TodosList from './components/TodosList';
import TodoProvider from './store/TodoProvider';

function App() {
  return (
    <TodoProvider>
      <header className="card">
        <h1>TODO</h1>
      </header>
      <main>
        <AddTodo />
        <TodosList />
      </main>
    </TodoProvider>
  );
}

export default App;
