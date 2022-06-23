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
        default: {
            return state
        }
    }
}