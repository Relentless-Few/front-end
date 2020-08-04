import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import reducer from "./reducers/reducer";
import {
  saveToLocalStorage,
  loadFromLocalStorage
} from "./localStorage/sessionData";
import { composeWithDevTools } from "redux-devtools-extension";
require("dotenv").config();

const persistedState = loadFromLocalStorage();

const store = createStore(
  reducer,
  persistedState,
  composeWithDevTools(applyMiddleware(thunk))
);

store.subscribe(() => {
  saveToLocalStorage(store.getState());
});

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
