import { booksApi } from "../../../api/books/booksApi";
import { errorAC } from "../error/errorAction";
import { BadSearchAC, GetBooks, LoadedAC, LoadMoreAC, LoadMoreItems, SearchAC, SearchValueAC } from "./types/SearchActionTypes";

export const SEARCH = "SEARCH";
export const SEARCH_VALUE = "SEARCH_VALUE";
export const LOAD_MORE = "LOAD_MORE";
export const LOADER = "LOADER";
export const BAD_SEARCH = "BAD_SEARCH"

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

const badSearchAC: BadSearchAC = () => ({
  type: BAD_SEARCH
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
      dispatch(badSearchAC());
      dispatch(errorAC("Возникла проблема с сервером"))
    } else {
      dispatch(badSearchAC());
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
      dispatch(errorAC("Server problems"))
    } else {
      dispatch(errorAC(err.response.message))
    }
  }
  dispatch(loadedAC(false))
}