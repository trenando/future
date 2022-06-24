import { AppThunk } from "../../../ReduxTypes";
import { BookState } from "../../../state/stateType";
import { ActionFunction, PayloadActionFunction } from "../../ActionsTypes";
import { GET_BOOK, UNMOUNT } from "../bookAction";

type BookAction = {
    type: typeof GET_BOOK,
    payload: BookState
}

export type UnmountAction = {
    type: typeof UNMOUNT
}

export type UnmountAC = ActionFunction<UnmountAction>
export type BookAC = PayloadActionFunction<BookAction, BookState>

export type BookActions = BookAction | UnmountAction;

export type GetBook = (bookId: string) => AppThunk