import { booksApi } from "../../../api/books/booksApi";
import { GetBooks, SearchAC, SearchValueAC } from "./types/SearchActionTypes";

export const SEARCH = "SEARCH";
export const SEARCH_VALUE = "SEARCH_VALUE";

export const searchAC:SearchAC = (payload) => ({
  type: SEARCH,
  payload,
});

export const searchValueAC:SearchValueAC = (payload) => ({
  type: SEARCH_VALUE,
  payload,
});

export const getBooks:GetBooks = (payload) => async (dispatch) => {
  try {
    const data = await booksApi.search(payload);
    dispatch(searchAC(data.items));
  } catch (err: any) {
    console.log(err.response);
  }
};
