import { LOADER, LOAD_MORE, SEARCH, SEARCH_VALUE } from "../../actions/search/searchAction";
import { initialState } from "../../state/initialState";
import { SearchReducer } from "./types/SearchReducerTypes";

export const searchReducer: SearchReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEARCH_VALUE: {
      const { payload } = action
      return {
        ...state,
        ...payload,
      };
    }
    case SEARCH: {
      const { payload } = action
      return {
        ...state,
        ...payload,
      };
    }
    case LOAD_MORE: {
      return {
        ...state,
        items: [...state.items, ...action.payload]
      }
    }
    case LOADER: {
      return {
        ...state,
        isLoaded: action.payload
      }
    }
    default: {
      return state;
    }
  }
};
