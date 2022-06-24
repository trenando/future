import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { store } from "./redux/redux-store";
import { Router } from "./components/Router/Router";
import "./global.scss";
import { SearchContainer } from "./components/Search/SearchContainer";

export const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <SearchContainer />
        <Router />
      </BrowserRouter>
    </Provider>
  );
};
