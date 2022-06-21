import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import thunkMiddleware from "redux-thunk";
import logger from "redux-logger";
import { searchReducer } from "./reducers/search/searchReducer";

const rootReducer = combineReducers({
  search: searchReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: [thunkMiddleware, logger],
});
