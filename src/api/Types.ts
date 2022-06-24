import { SearchPayload } from "../components/Search/SearchTypes";
import { BookState, Item } from "../redux/state/stateType";

type SearchData = {
  items: Array<Item>;
  totalItem: number;
}

export type BooksApi = {
  search: (payload: SearchPayload) => Promise<SearchData>;
  bookById: (bookId: string) => Promise<BookState>;
};
