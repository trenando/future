import { booksApi } from "../../../api/books/booksApi";
import { GetBooks, LoadMoreAC, LoadMoreItems, SearchAC, SearchValueAC } from "./types/SearchActionTypes";

export const SEARCH = "SEARCH";
export const SEARCH_VALUE = "SEARCH_VALUE";
export const LOAD_MORE = "LOAD_MORE";

export const searchAC: SearchAC = (payload) => ({
  type: SEARCH,
  payload,
});

export const searchValueAC: SearchValueAC = (payload) => ({
  type: SEARCH_VALUE,
  payload,
});

const loadMoreAC: LoadMoreAC = (payload) => ({
  type: LOAD_MORE,
  payload
})

export const getBooks: GetBooks = (payload,setSubmitting) => async (dispatch) => {
  try {
    const data = await booksApi.search(payload);
    setSubmitting(false)
    dispatch(searchValueAC(payload))
    dispatch(searchAC(data));
  } catch (err: any) {
    console.log(err.response);
  }
};

export const loadMoreItems: LoadMoreItems = (payload) => async (dispatch) => {
    try {
        const newItems = await booksApi.search(payload);
        dispatch(searchValueAC(payload))
        dispatch(loadMoreAC(newItems.items))
    } catch (err) {
        console.log(err)
    }
}