import { UNMOUNT } from "../../actions/book/bookAction";
import { ERROR } from "../../actions/error/errorAction";
import { initialState } from "../../state/initialState";
import { ErrorReducer } from "./types/ErrorReducerTypes";

export const errorReducer: ErrorReducer = (state = initialState, action) => {
    switch (action.type) {
        case ERROR: {
            return {
                ...state,
                errorMessage: action.payload
            }
        }
        case UNMOUNT:{
            return {
                ...state,
                errorMessage:null
            }
        }
        default: {
            return state
        }
    }
}