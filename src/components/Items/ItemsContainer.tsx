import React, { useCallback, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Dispatch } from "redux";
import { SearchSelectorState } from "../../pages/Home/HomeTypes";
import { loadedAC } from "../../redux/actions/search/searchAction";
import { Item } from "../../redux/state/stateType";
import { Items } from "./Items";
import { ItemsProps, Loading } from "./ItemsTypes";

export const ItemsContainer = () => {
    const dispatch: Dispatch<any> = useDispatch()

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