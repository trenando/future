import React, { useCallback } from "react";
import { getBooks } from "../../redux/actions/search/searchAction";
import { useAppDispatch } from "../../redux/ReduxTypes";
import { Search } from "./Search";
import { SearchDispatch, SearchProps } from "./SearchTypes";

export const SearchContainer = () => {
  const dispatch = useAppDispatch();

  const search: SearchDispatch = useCallback(
    (payload, setSubmitting) => {
      dispatch(getBooks(payload, setSubmitting));
    },
    [dispatch]
  );

  const searchProps: SearchProps = {
    search,
  };

  return <Search {...searchProps} />;
};
