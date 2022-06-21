import { SearchActions } from "../../../actions/search/types/SearchActionTypes";
import { StateType } from "../../../state/stateType";

export type SearchReducer = (state: StateType, action: SearchActions) => StateType;
