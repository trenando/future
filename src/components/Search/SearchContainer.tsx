import React, { useCallback, useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Dispatch } from "redux";
import { getBooks, searchValueAC } from "../../redux/actions/search/searchAction";
import { Search } from "./Search";
import { ChangeInputValue, Handle, SearchDispatch, SearchProps } from "./SearchTypes";

export const SearchContainer = () => {
  const dispatch: Dispatch<any> = useDispatch(); //типизировать

  const searchValue: string = useSelector(
    ({ search }: { search: { searchValue: string } }) => search.searchValue
  );

  const changeInputValue: ChangeInputValue = useCallback(
    (payload) => {
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

  const handle: Handle = useCallback(
    (event) => {
      if (event.currentTarget === event.target && event.keyCode === 13) {
        search(searchValue);
      }
    },
    [search]
  );

  const memoSearchProps = useMemo(() => {
    return {
      searchValue,
    };
  }, [searchValue]);

  const searchProps: SearchProps = {
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
  }, [handle]);

  return <Search {...searchProps} />;
};
