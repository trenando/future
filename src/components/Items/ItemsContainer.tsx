import React, { useCallback, useMemo } from "react";
import { useSelector } from "react-redux";
import { SearchSelectorState } from "../../pages/Home/HomeTypes";
import { loadedAC } from "../../redux/actions/search/searchAction";
import { useAppDispatch } from "../../redux/ReduxTypes";
import { Item } from "../../redux/state/stateType";
import { Items } from "./Items";
import { ItemsProps, Loading } from "./ItemsTypes";

export const ItemsContainer = () => {
    const dispatch = useAppDispatch()

    const items: Array<Item> = useSelector(({ search }: SearchSelectorState) => search.items);

    const memoItems = useMemo(() => {
        return {
            items
        }
    }, [items])

    const loading: Loading = useCallback((payload) => {
        dispatch(loadedAC(payload))
    }, [dispatch])

    const itemsProps: ItemsProps = {
        ...memoItems,
        loading
    }
    return <Items {...itemsProps} />;
};