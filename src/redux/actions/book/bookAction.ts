import { booksApi } from "../../../api/books/booksApi";
import { errorAC } from "../error/errorAction";
import { loadedAC } from "../search/searchAction";
import { BookAC, GetBook } from "./types/BookActionTypes";

export const GET_BOOK = "GET_BOOK"

const bookAC: BookAC = (payload) => ({
    type: GET_BOOK,
    payload
})

export const getBook: GetBook = (bookId) => async (dispatch) => {
    try {
        const data = await booksApi.bookById(bookId)
        dispatch(bookAC(data))
        dispatch(errorAC(null))
        dispatch(loadedAC(false))
    } catch (err: any) {
        if (err.response && err.response.status >= 500) {
            dispatch(errorAC("Возникла проблема с ссервером"))
        } else {
            dispatch(errorAC(err.response.message))
        }
    }
} 