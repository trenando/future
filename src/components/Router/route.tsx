import { BookContainer } from "../../pages/Book/BookContainer";
import { HomeContainer } from "../../pages/Home/HomeContainer";
import { PageNotFound } from "../../pages/PageNotFound/PageNotFound";

export const route = {
  home: {
    path: "/",
    link: "/",
    element: <HomeContainer />,
  },
  book: {
    path: "book/:bookId/",
    element: <BookContainer />
  },
  pageNotFound: {
    path: "*",
    element: <PageNotFound />,
  },
};
