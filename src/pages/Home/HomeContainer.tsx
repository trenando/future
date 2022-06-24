import React, { useCallback, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Dispatch } from "redux";
import { loadMoreItems } from "../../redux/actions/search/searchAction";
import { Home } from "./Home";
import { HomeProps, LoadMore, SearchSelectorState } from "./HomeTypes";

export const HomeContainer = () => {
  const dispatch: Dispatch<any> = useDispatch();

  const search = useSelector(({ search }: SearchSelectorState) => search);
  const errorMessage = useSelector(({ error }: { error: { errorMessage: string | null } }) => error.errorMessage)

  const memoErrorMessage = useMemo(() => {
    return {
      errorMessage,
    };
  }, [errorMessage]);

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
    ...memoErrorMessage,
    loadMore
  };
  return <Home {...homeProps} />;
};
