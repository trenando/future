import { PayloadActionFunction } from "../../ActionsTypes"
import { UnmountAction } from "../../book/types/BookActionTypes"
import { ERROR } from "../errorAction"

export type ErrorAction = {
    type: typeof ERROR,
    payload: string | null
}

export type ErrorAC = PayloadActionFunction<ErrorAction, string | null>

export type ErrorActions = ErrorAction | UnmountAction;