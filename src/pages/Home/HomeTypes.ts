import { Item } from "../../redux/state/stateType";

export interface LoadMorePayload {
  startIndex: number;
  maxResults: number;
  searchValue: string;
  category: string;
  sortBy: string;
};

export interface SearchState extends LoadMorePayload {
  items: Array<Item>;
  totalItems: number;
  isLoaded: boolean;
}

export interface HomeProps extends SearchState {
  errorMessage: string | null;
  loadMore: (payload: LoadMorePayload) => void;
};

export interface SearchSelectorState {
  search: SearchState;
}

export type LoadMore = (payload: LoadMorePayload) => void;