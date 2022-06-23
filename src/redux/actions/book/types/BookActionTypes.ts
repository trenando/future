import { Dispatch } from "redux";
import { BookState } from "../../../state/stateType";
import { PayloadActionFunction } from "../../ActionsTypes";
import { ErrorAction } from "../../error/types/ErrorActionTypes";
import { LoaderAction } from "../../search/types/SearchActionTypes";
import { GET_BOOK } from "../bookAction";

type BookAction = {
    type: typeof GET_BOOK,
    payload: BookState
}

export type BookAC = PayloadActionFunction<BookAction, BookState>

export type BookActions = BookAction;

export type GetBook = (bookId: string) => (dispatch: Dispatch<BookAction | LoaderAction | ErrorAction>) => void