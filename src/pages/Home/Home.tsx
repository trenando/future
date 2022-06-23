import React from "react";
import { Items } from "../../components/Items/Items";
import { Loader } from "../../components/Loader/Loader";
import { LoadMore } from "../../components/LoadMore/LoadMore";
import { SearchContainer } from "../../components/Search/SearchContainer";
import { HomeProps } from "./HomeTypes";

export const Home: React.FC<HomeProps> = (
  { items, totalItems, searchValue,
    category, sortBy, startIndex,
    maxResults, isLoaded, loadMore }) => {

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
      {isLoaded && !totalItems ? <Loader /> : null}
      {totalItems ? <span>{totalItems}</span> : null}
      <Items items={items} />
      <LoadMore
        totalItems={totalItems}
        startIndex={startIndex}
        maxResults={maxResults}
        paginate={paginate}
        isLoaded={isLoaded}
      />
    </div>
  );
};
