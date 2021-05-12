import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import AddTodo from './components/AddTodo';
import TodosList from './components/TodosList';
import store, { persistor } from './store';

function App() {
  // const existingList = JSON.parse(localStorage.getItem('todos'));

  // const [todosList, setTodosList] = useState(existingList ? existingList : []);

  // useEffect(() => {
  //   localStorage.setItem('todos', JSON.stringify(todosList));
  // }, [todosList]);

  return (
    <Provider store={store}>
      <PersistGate loading={<p>Loading...</p>} persistor={persistor}>
        <header className="card">
          <h1>TODO</h1>
        </header>
        <main>
          <AddTodo />
          <TodosList />
        </main>
      </PersistGate>
    </Provider>
  );
}

export default App;
