import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import store, { persistor } from './store';
import './index.css';
import TodoPage from './pages/Todo/TodoPage';

function App() {
  // const existingList = JSON.parse(localStorage.getItem('todos'));

  // const [todosList, setTodosList] = useState(existingList ? existingList : []);

  // useEffect(() => {
  //   localStorage.setItem('todos', JSON.stringify(todosList));
  // }, [todosList]);

  return (
    <Provider store={store}>
      <PersistGate loading={<p>Loading...</p>} persistor={persistor}>
        <TodoPage />
      </PersistGate>
    </Provider>
  );
}

export default App;
