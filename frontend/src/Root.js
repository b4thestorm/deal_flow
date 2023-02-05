import React from "react";
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import { createBrowserHistory } from "history";
import { configureStore } from '@reduxjs/toolkit'
import { applyMiddleware } from "redux";
import { routerMiddleware, ConnectedRouter } from "connected-react-router";
import App from "./App";

import createRootReducer from "./Reducer";

const Root = ({ children, initialState = {} }) => {
  const history = createBrowserHistory();
  const middleware = [thunk, routerMiddleware(history)];

  const store = configureStore({
    reducer: createRootReducer(history),
    preloadedState: initialState,
    middleware: [...middleware],
  });

  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <App />
      </ConnectedRouter>
    </Provider>
  );
};

export default Root;