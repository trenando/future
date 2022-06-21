import React from "react";
import { SearchContainer } from "../../components/Search/SearchContainer";
import { HomeProps } from "./HomeTypes";

export const Home: React.FC<HomeProps> = ({ items }) => {
  return (
    <div>
      <SearchContainer />
    </div>
  );
};
