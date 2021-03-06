import React from "react";
import { Route, Routes } from "react-router-dom";
import { route } from "./route";

export const Router = () => {
  return (
    <Routes>
      <Route path={route.home.path} element={route.home.element} />
      <Route path={route.book.path} element={route.book.element}/>
      <Route path={route.pageNotFound.path} element={route.pageNotFound.element} />
    </Routes>
  );
};
