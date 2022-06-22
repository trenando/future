import React from "react";
import { SearchContainer } from "../../components/Search/SearchContainer";
import { HomeProps } from "./HomeTypes";

export const Home: React.FC<HomeProps> = (
  { items, totalItems, searchValue,
    category, sortBy, startIndex,
    maxResults, loadMore }) => {
  const paginate = () => {
    const payload = {
      startIndex: startIndex + maxResults,
      maxResults,
      searchValue,
      category,
      sortBy
    }
    loadMore(payload)
  }
  return (
    <div>
      <SearchContainer />
      {totalItems ? <span>{totalItems}</span> : null}
      {totalItems > startIndex + maxResults ? <button onClick={paginate}>Load more</button> : null}
    </div>
  );
};
