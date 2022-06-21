import { Dispatch } from "redux";
import { Item } from "../../../state/stateType";
import { PayloadActionFunction } from "../../ActionsTypes";
import { SEARCH, SEARCH_VALUE } from "../searchAction";

export type SearchValueAction = {
  type: typeof SEARCH_VALUE;
  payload: string;
};

type SeacrhAction = {
  type: typeof SEARCH;
  payload: Array<Item>
};

export type SearchValueAC = PayloadActionFunction<SearchValueAction, string>;

export type SearchAC = PayloadActionFunction<SeacrhAction, Array<Item>>;

export type SearchActions = SearchValueAction | SeacrhAction;

export type GetBooks = (payload: string) => (dispatch: Dispatch<SeacrhAction>) => void;
