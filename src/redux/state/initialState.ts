import { StateType } from "./stateType";

export const initialState: StateType = {
  searchValue: "",
  category: "all",
  sortBy: "relevance",
  totalItems: null,
  startIndex: null,
  maxResults: null,
  isLoaded: false,
  items: [],
  book: undefined,
  errorMessage: null
}