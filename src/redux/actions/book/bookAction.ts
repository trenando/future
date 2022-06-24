import { booksApi } from "../../../api/books/booksApi";
import { errorAC } from "../error/errorAction";
import { loadedAC } from "../search/searchAction";
import { BookAC, GetBook, UnmountAC } from "./types/BookActionTypes";

export const GET_BOOK = "GET_BOOK"
export const UNMOUNT = "UNMOUNT"

const bookAC: BookAC = (payload) => ({
    type: GET_BOOK,
    payload
})

export const unmountAC:UnmountAC = () => ({
    type: UNMOUNT
})

export const getBook: GetBook = (bookId) => async (dispatch) => {
    try {
        const data = await booksApi.bookById(bookId)
        dispatch(bookAC(data))
        dispatch(errorAC(null))
    } catch (err: any) {
        if (err.response && err.response.status >= 500) {
            dispatch(errorAC("Server problems"))
        } else {
            dispatch(errorAC(err.response.message))
        }
    }
    dispatch(loadedAC(false))
} 