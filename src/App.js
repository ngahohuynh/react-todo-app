import { Provider } from 'react-redux';
import AddTodo from './components/AddTodo';
import TodosList from './components/TodosList';
import store from './store';

function App() {
  // const existingList = JSON.parse(localStorage.getItem('todos'));

  // const [todosList, setTodosList] = useState(existingList ? existingList : []);

  // useEffect(() => {
  //   localStorage.setItem('todos', JSON.stringify(todosList));
  // }, [todosList]);

  return (
    <Provider store={store}>
      <header className="card">
        <h1>TODO</h1>
      </header>
      <main>
        <AddTodo />
        <TodosList />
      </main>
    </Provider>
  );
}

export default App;
