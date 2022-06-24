import { Dispatch } from "redux";
import { SearchPayload, SetSubmitting } from "../../../../components/Search/SearchTypes";
import { LoadMorePayload } from "../../../../pages/Home/HomeTypes"
import { AppThunk } from "../../../ReduxTypes";
import { Item } from "../../../state/stateType";
import { ActionFunction, PayloadActionFunction } from "../../ActionsTypes";
import { ErrorAction } from "../../error/types/ErrorActionTypes";
import { BAD_SEARCH, LOADER, LOAD_MORE, SEARCH, SEARCH_VALUE } from "../searchAction";

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

type BadSearch = {
  type: typeof BAD_SEARCH
}

export type LoaderAction = {
  type: typeof LOADER;
  payload: boolean;
}

export type BadSearchAC = ActionFunction<BadSearch>
export type SearchValueAC = PayloadActionFunction<SearchValueAction, SearchPayload>;
export type SearchAC = PayloadActionFunction<SeacrhAction, SeacrhActionPayload>;
export type LoadMoreAC = PayloadActionFunction<LoadMoreAction, Array<Item>>
export type LoadedAC = PayloadActionFunction<LoaderAction, boolean>;

export type SearchActions = SearchValueAction | SeacrhAction | LoadMoreAction | LoaderAction | BadSearch;

export type GetBooks = (payload: SearchPayload, setSubmitting: SetSubmitting) => AppThunk

export type LoadMoreItems = (payload: LoadMorePayload) => AppThunk