import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import thunkMiddleware from "redux-thunk";
import logger from "redux-logger";

const rootReducer = combineReducers({});

export const store = configureStore({
  reducer: rootReducer,
  middleware: [thunkMiddleware, logger],
});
