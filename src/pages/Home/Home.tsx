import React from "react";
import { ItemsContainer } from "../../components/Items/ItemsContainer";
import { Loader } from "../../components/Loader/Loader";
import { LoadMore } from "../../components/LoadMore/LoadMore";
import { HomeProps } from "./HomeTypes";
import styles from "./Home.module.scss"

export const Home: React.FC<HomeProps> = (
  { totalItems, searchValue, category,
    sortBy, startIndex, maxResults,
    isLoaded, loadMore, errorMessage }) => {
  let results = "results";

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
  if (totalItems === 1) results = "result"

  return (
    <div>
      {errorMessage
        ?
        <div className={styles.error}>
          <span>{errorMessage}</span>
        </div>
        :
        null
      }
      {isLoaded && !totalItems
        ?
        <div className={styles.loader}>
          <Loader />
        </div>
        :
        null}
      {
        /*
        * При одинаковых запросах приходит разное количество totalItems
        * Тестировалось через postman
        */
      }
      {totalItems
        ?
        <div className={styles.total}>
          <span>Found {totalItems} {results}</span>
        </div>
        :
        null}
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
