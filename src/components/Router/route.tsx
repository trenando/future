import { HomeContainer } from "../../pages/Home/HomeContainer";
import { PageNotFound } from "../../pages/PageNotFound/PageNotFound";

export const route = {
  home: {
    path: "/",
    link: "/",
    element: <HomeContainer />,
  },
  pageNotFound: {
    path: "*",
    element: <PageNotFound />,
  },
};
