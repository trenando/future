import React, { useCallback } from "react";
import { useDispatch } from "react-redux";
import { Dispatch } from "redux";
import { getBooks } from "../../redux/actions/search/searchAction";
import { Search } from "./Search";
import { SearchDispatch, SearchProps } from "./SearchTypes";

export const SearchContainer = () => {
  const dispatch: Dispatch<any> = useDispatch();

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
