import React, { useCallback, useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Dispatch } from "redux";
import { getBooks, searchValueAC } from "../../redux/actions/search/searchAction";
import { Search } from "./Search";
import { SearchDispatch } from "./SearchTypes";

export const SearchContainer = () => {
  const dispatch: Dispatch<any> = useDispatch(); //типизировать

  const searchValue: string = useSelector(
    ({ search }: { search: { searchValue: string } }) => search.searchValue
  );

  const changeInputValue = useCallback(
    (payload: string) => {
      dispatch(searchValueAC(payload));
    },
    [dispatch]
  );

  const search: SearchDispatch = useCallback(
    (payload) => {
      dispatch(getBooks(payload));
    },
    [dispatch]
  );

  const handle = (event: any) => {
    if ((event.currentTarget === event.target && event.keyCode === 13)) {
      search(searchValue);
    }
  };

  const memoSearchProps = useMemo(() => {
    return {
      searchValue,
    };
  }, [searchValue]);

  const searchProps: any = {
    ...memoSearchProps,
    changeInputValue,
    search,
    handle,
  };

  useEffect(() => {
    window.addEventListener("keydown", handle);
    return () => {
      window.removeEventListener("keydown", handle);
    };
  });
  return <Search {...searchProps} />;
};
