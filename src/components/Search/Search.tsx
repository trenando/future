import React from "react";
import { GetInputValue, OnInputChange, OnKeyDown, SearchProps } from "./SearchTypes";

export const Search: React.FC<SearchProps> = ({
  searchValue,
  changeInputValue,
  search,
  handle,
}) => {
  const getInputValue: GetInputValue = () => {
    search(searchValue);
  };
  const onInputChange: OnInputChange = (event) => {
    changeInputValue(event.target.value);
  };
  const onKeyDown: OnKeyDown = (event) => {
    handle(event);
  };
  return (
    <div>
      <input type="text" value={searchValue} onChange={onInputChange} onKeyDown={onKeyDown} />
      <button onClick={getInputValue}>search</button>
    </div>
  );
};
