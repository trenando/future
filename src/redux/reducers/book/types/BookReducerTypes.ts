import { BookActions } from "../../../actions/book/types/BookActionTypes";
import { StateType } from "../../../state/stateType";

export type BookReducer = (state: StateType, action: BookActions) => StateType;