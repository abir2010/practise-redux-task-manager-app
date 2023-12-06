/* eslint-disable no-unused-vars */
import taskReducer from "./addTask/taskReducer";
import { legacy_createStore as createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import { composeWithDevTools } from "redux-devtools-extension";

const store = createStore(taskReducer);

export default store;
