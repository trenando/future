import { Dispatch } from "redux";
import { SearchPayload, SetSubmitting } from "../../../../components/Search/SearchTypes";
import { LoadMorePayload } from "../../../../pages/Home/HomeTypes"
import { Item } from "../../../state/stateType";
import { PayloadActionFunction } from "../../ActionsTypes";
import { LOAD_MORE, SEARCH, SEARCH_VALUE } from "../searchAction";

type LoadMoreAction = {
  type: typeof LOAD_MORE,
  payload: Array<Item>
}

type SeacrhActionPayload = {
  items: Array<Item>;
  totalItem: number;
}

export type SearchValueAction = {
  type: typeof SEARCH_VALUE;
  payload: SearchPayload;
};

type SeacrhAction = {
  type: typeof SEARCH;
  payload: SeacrhActionPayload
};

export type SearchValueAC = PayloadActionFunction<SearchValueAction, SearchPayload>;

export type SearchAC = PayloadActionFunction<SeacrhAction, SeacrhActionPayload>;

export type LoadMoreAC = PayloadActionFunction<LoadMoreAction, Array<Item>>

export type SearchActions = SearchValueAction | SeacrhAction | LoadMoreAction;

export type GetBooks = (payload: SearchPayload, setSubmitting: SetSubmitting) => (dispatch: Dispatch<SearchValueAction | SeacrhAction>) => void;

export type LoadMoreItems = (payload: LoadMorePayload) => (dispatch: Dispatch<SearchValueAction | LoadMoreAction>) => void;