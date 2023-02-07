import React from "react";
import { Provider } from "react-redux";
import { createBrowserHistory } from "history";
import { createReduxHistoryContext } from "redux-first-history";
import { HistoryRouter as Router } from "redux-first-history/rr6";
import { combineReducers } from "redux";
import { signupReducer } from "./components/signup/SignupReducer";
import { configureStore } from '@reduxjs/toolkit'
import { applyMiddleware } from "redux";
import { routerMiddleware, ConnectedRouter } from "connected-react-router";

const Root = ({ children, initialState = {} }) => {
const {
  createReduxHistory,
  routerMiddleware,
  routerReducer
} = createReduxHistoryContext({ history: createBrowserHistory() });

const store = configureStore({
  reducer: combineReducers({
  router: routerReducer,
  createUser: signupReducer 
  }),
    preloadedState: initialState,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(routerMiddleware),
  });
  
  const history = createReduxHistory(store);

  return (
    <Provider store={store}>
      <Router history={history}>
        {children}
      </Router>
    </Provider>
  );
};

export default Root;