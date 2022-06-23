import { ErrorAC } from "./types/ErrorActionTypes";

export const ERROR = "ERROR";

export const errorAC:ErrorAC = (payload) => ({
    type: ERROR,
    payload
})