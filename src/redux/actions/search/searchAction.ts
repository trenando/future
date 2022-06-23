import { booksApi } from "../../../api/books/booksApi";
import { errorAC } from "../error/errorAction";
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

export const loadedAC: LoadedAC = (payload) => ({
  type: LOADER,
  payload
})

export const getBooks: GetBooks = (payload, setSubmitting) => async (dispatch) => {
  dispatch(loadedAC(true))
  try {
    dispatch(errorAC(null))
    const data = await booksApi.search(payload);
    dispatch(searchValueAC(payload))
    dispatch(searchAC(data));
  } catch (err: any) {
    if (err.response && err.response.status >= 500) {
      dispatch(errorAC("Возникла проблема с ссервером"))
    } else {
      dispatch(errorAC(err.message))
    }
  }
  setSubmitting(false)
  dispatch(loadedAC(false))
};

export const loadMoreItems: LoadMoreItems = (payload) => async (dispatch) => {
  dispatch(loadedAC(true))
  try {
    dispatch(errorAC(null))
    const newItems = await booksApi.search(payload);
    dispatch(searchValueAC(payload))
    dispatch(loadMoreAC(newItems.items))
  } catch (err: any) {
    if (err.response && err.response.status >= 500) {
      dispatch(errorAC("Возникла проблема с ссервером"))
    } else {
      dispatch(errorAC(err.response.message))
    }
  }
  dispatch(loadedAC(false))
}