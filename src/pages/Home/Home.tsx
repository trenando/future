import React from "react";
import { ItemsContainer } from "../../components/Items/ItemsContainer";
import { Loader } from "../../components/Loader/Loader";
import { LoadMore } from "../../components/LoadMore/LoadMore";
import { SearchContainer } from "../../components/Search/SearchContainer";
import { HomeProps } from "./HomeTypes";

export const Home: React.FC<HomeProps> = (
  { totalItems, searchValue, category,
    sortBy, startIndex, maxResults,
    isLoaded, loadMore, errorMessage }) => {

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
      {errorMessage ? <div>{errorMessage}</div> : null}
      {isLoaded && !totalItems ? <Loader /> : null}
      {
        /*
        * При одинаковых запросах приходит разное количество totalItems
        * Тестировалось через postman
        */
      }
      {totalItems ? <span>{totalItems}</span> : null}
      <ItemsContainer />
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
