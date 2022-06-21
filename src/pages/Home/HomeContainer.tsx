import React, { useMemo } from "react";
import { useSelector } from "react-redux";
import { Item } from "../../redux/state/stateType";
import { Home } from "./Home";

export const HomeContainer = () => {
  const items = useSelector(({ search }: { search: { items: Array<Item> } }) => search.items);

  const memoItems = useMemo(() => {
    return {
      items,
    };
  }, [items]);

  const homeProps = {
    ...memoItems,
  };
  return <Home {...homeProps} />;
};
