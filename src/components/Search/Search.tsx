import React from "react";

export const Search = ({ searchValue, changeInputValue, search, handle }: any) => {
  const getInputValue = () => {
    search(searchValue);
  };
  const onInputChange = (event: { target: { value: string } }) => {
    changeInputValue(event.target.value);
  };
  const onKeyDown = (event: any) => {
    handle(event);
  };
  return (
    <div>
      <input type="text" value={searchValue} onChange={onInputChange} onKeyDown={onKeyDown} />
      <button onClick={getInputValue}>search</button>
    </div>
  );
};
