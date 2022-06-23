import { PayloadActionFunction } from "../../ActionsTypes"
import { ERROR } from "../errorAction"

export type ErrorAction = {
    type: typeof ERROR,
    payload: string | null
}

export type ErrorAC = PayloadActionFunction<ErrorAction, string | null>

export type ErrorActions = ErrorAction