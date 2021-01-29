import {
  createStore,
  applyMiddleware,
  combineReducers,
  Middleware,
} from "redux";
import { searchRobots, requestRobotsReducer } from "./reducers";
import { createLogger } from "redux-logger";
import thunk from "redux-thunk";

const rootReducer = combineReducers({ searchRobots, requestRobotsReducer });
const logger = createLogger();
const middlewares: Array<Middleware> = [thunk];

if (process.env.NODE_ENV === "development") {
  middlewares.push(logger);
}
const store = createStore(rootReducer, applyMiddleware(...middlewares));

export default store;
