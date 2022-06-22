import { StateType } from "./stateType";

export const initialState: StateType = {
  searchValue: "",
  category: "all",
  sortBy: "relevance",
  totalItems: null,
  startIndex: null,
  maxResults: null,
  items: [],
};
