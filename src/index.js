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
import ApolloClient from "apollo-client";
import { ApolloProvider } from "@apollo/react-hooks";
import { WebSocketLink } from "apollo-link-ws";
import { HttpLink } from "apollo-link-http";
import { split } from "apollo-link";
import { getMainDefinition } from "apollo-utilities";
import { InMemoryCache } from "apollo-cache-inmemory";

const httpLink = new HttpLink({
  uri: `${process.env.REACT_APP_BASE_API_URL}`
});

const wsLink = new WebSocketLink({
  uri: `${process.env.REACT_APP_BASE_WS_URL}`,
  options: {
    reconnect: true
  }
});
const link = split(
  ({ query }) => {
    const { kind, operation } = getMainDefinition(query);
    return kind === "OperationDefinition" && operation === "subscription";
  },
  wsLink,
  httpLink
);
const client = new ApolloClient({
  link,
  cache: new InMemoryCache()
});

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
  <ApolloProvider client={client}>
    <Provider store={store}>
      <App />
    </Provider>
  </ApolloProvider>,
  document.getElementById("root")
);
