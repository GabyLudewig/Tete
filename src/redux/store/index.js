import { createStore, combineReducers } from "redux";
import {inicioReducer}from "../reducers/inicio"

const reducers = combineReducers({
    inicioReducer

});

const store = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export { store };