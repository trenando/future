import { API_KEY, axiosInstance } from "../instance";
import { BooksApi } from "../Types";

const instance = axiosInstance("volumes");

export const booksApi: BooksApi = {
  async search({ searchValue, sortBy, category, startIndex, maxResults }) {
    let q = `${searchValue}`;
    if (category !== "all") {
      q = `${searchValue}+subject:${category}`
    }
    const res = await instance.get("", {
      params: {
        q,
        orderBy: sortBy,
        startIndex,
        maxResults,
        api_key: API_KEY,
      },
    });
    return res.data;
  },
};