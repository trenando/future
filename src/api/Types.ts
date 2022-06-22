import { SearchPayload } from "../components/Search/SearchTypes";

export type BooksApi = {
  search: (payload: SearchPayload) => any;
};
