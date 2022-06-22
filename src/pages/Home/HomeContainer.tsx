import React, { useCallback, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Dispatch } from "redux";
import { loadMoreItems } from "../../redux/actions/search/searchAction";
import { Home } from "./Home";
import { HomeProps, LoadMore, SearchSelectorState } from "./HomeTypes";

export const HomeContainer = () => {
  const dispatch: Dispatch<any> = useDispatch(); //типизировать

  const search = useSelector(({ search }: SearchSelectorState) => search);

  const memoSearch = useMemo(() => {
    return {
      ...search,
    };
  }, [search]);

  const loadMore: LoadMore = useCallback((payload) => {
    dispatch(loadMoreItems(payload))
  }, [dispatch])

  const homeProps: HomeProps = {
    ...memoSearch,
    loadMore
  };
  return <Home {...homeProps} />;
};
