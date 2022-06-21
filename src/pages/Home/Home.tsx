import React from "react";
import { SearchContainer } from "../../components/Search/SearchContainer";

export const Home = ({items}:any) => {
  console.log("домашние предметы",items)
  return (
    <div>
      <SearchContainer />
    </div>
  );
};
