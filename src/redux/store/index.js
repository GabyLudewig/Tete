import { createStore, combineReducers } from "redux";
import {inicioReducer}from "../reducers/inicio"
import { portadaReducer } from "../reducers/portada";

const reducers = combineReducers({
    inicioReducer,
    portadaReducer


});

const store = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export { store };