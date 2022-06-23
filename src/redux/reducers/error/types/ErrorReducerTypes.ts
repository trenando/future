import { ErrorActions } from "../../../actions/error/types/ErrorActionTypes";
import { StateType } from "../../../state/stateType";

export type ErrorReducer = (state: StateType, action: ErrorActions) => StateType