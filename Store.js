import { createStore } from "redux";
import { combineReducers } from "redux";
import { todos } from "./Reducer";

const rootReducer = combineReducers({
  todos: todos
});

const store = createStore(rootReducer);

export { store };