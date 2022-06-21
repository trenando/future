import { Dispatch } from "redux";
import { PayloadActionFunction } from "../../ActionsTypes";
import { SEARCH, SEARCH_VALUE } from "../searchAction";

export type SearchValueAction = {
  type: typeof SEARCH_VALUE;
  payload: string;
};

type SeacrhAction = {
  type: typeof SEARCH;
  payload: Array<any>; // Типизировать
};

export type SearchValueAC = PayloadActionFunction<SearchValueAction, string>;

export type SearchAC = PayloadActionFunction<SeacrhAction, any>;

export type SearchActions = SearchValueAction | SeacrhAction;

export type GetBooks = (payload: string) => (dispatch: Dispatch<SeacrhAction>) => void;
