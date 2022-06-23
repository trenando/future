import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import thunkMiddleware from "redux-thunk";
import logger from "redux-logger";
import { searchReducer } from "./reducers/search/searchReducer";
import { bookReducer } from "./reducers/book/bookReducer";
import { errorReducer } from "./reducers/error/errorReducer";

const rootReducer = combineReducers({
  search: searchReducer,
  book: bookReducer,
  error: errorReducer
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: [thunkMiddleware, logger],
});
