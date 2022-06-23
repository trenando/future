import { booksApi } from "../../../api/books/booksApi";
import { GetBooks, LoadedAC, LoadMoreAC, LoadMoreItems, SearchAC, SearchValueAC } from "./types/SearchActionTypes";

export const SEARCH = "SEARCH";
export const SEARCH_VALUE = "SEARCH_VALUE";
export const LOAD_MORE = "LOAD_MORE";
export const LOADER = "LOADER";

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

const loadedAC: LoadedAC = (payload) => ({
  type: LOADER,
  payload
})

export const getBooks: GetBooks = (payload, setSubmitting) => async (dispatch) => {
  try {
    dispatch(loadedAC(true))
    const data = await booksApi.search(payload);
    setSubmitting(false)
    dispatch(searchValueAC(payload))
    dispatch(searchAC(data));
    dispatch(loadedAC(false))
  } catch (err: any) {
    console.log(err.response);
  }
};

export const loadMoreItems: LoadMoreItems = (payload) => async (dispatch) => {
  try {
    dispatch(loadedAC(true))
    const newItems = await booksApi.search(payload);
    dispatch(searchValueAC(payload))
    dispatch(loadMoreAC(newItems.items))
    dispatch(loadedAC(false))
  } catch (err) {
    console.log(err)
  }
}