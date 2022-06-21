import { API_KEY, axiosInstance } from "../instance";
import { BooksApi } from "../Types";

const instance = axiosInstance("volumes");

export const booksApi: BooksApi = {
  async search(searchValue) {
    const res = await instance.get("", {
      params: {
        q: searchValue,
        api_key: API_KEY,
      },
    });
    return res.data;
  },
};
