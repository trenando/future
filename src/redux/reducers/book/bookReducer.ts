import { GET_BOOK, UNMOUNT } from "../../actions/book/bookAction";
import { initialState } from "../../state/initialState";
import { BookReducer } from "./types/BookReducerTypes";

export const bookReducer: BookReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_BOOK: {
            return {
                ...state,
                book: action.payload
            }
        }
        case UNMOUNT:{
            return {
                ...state,
                book:undefined
            }
        }
        default: {
            return state;
        }
    }
}