import { combineReducers, createStore } from "redux";
import persistReducer from "redux-persist/es/persistReducer";
import persistStore from "redux-persist/es/persistStore";
import storage from "redux-persist/lib/storage";
import todoReducer from "./reducers/todoReducer";
import filterReducer from "./reducers/filterReducer";

const rootReducer = combineReducers({ todos: todoReducer, filter: filterReducer });

const persistConfig = {
  key: "todos",
  storage: storage,
  whitelist: ["todos"],
};

const pReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(
  pReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
export const persistor = persistStore(store);
