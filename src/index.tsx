import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, combineReducers } from "redux";
import * as serviceWorker from "./serviceWorker";
import "tachyons";
import App from "./containers/App";
import { searchRobots, requestRobotsReducer } from "./redux/reducer";
import { createLogger } from "redux-logger";

const rootReducer = combineReducers({ searchRobots, requestRobotsReducer });
const logger = createLogger();
const store = createStore(rootReducer, applyMiddleware(logger));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root") as HTMLElement
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();