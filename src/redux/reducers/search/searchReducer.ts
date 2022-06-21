import { SEARCH, SEARCH_VALUE } from "../../actions/search/searchAction";
import { initialState } from "../../state/initialState";
import { SearchReducer } from "./types/SearchReducerTypes";

export const searchReducer: SearchReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEARCH_VALUE: {
      const searchValue = action.payload;
      return {
        ...state,
        searchValue,
      };
    }
    case SEARCH: {
      let { items } = state;
      items = action.payload;
      return {
        ...state,
        items,
      };
    }
    default: {
      return state;
    }
  }
};
