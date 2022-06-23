import { Item } from "../../redux/state/stateType";

export type Redirect = (bookId: string) => void;

export type ItemsProps = {
    items: Array<Item>;
    loading:Loading;
}

export type Loading = (payload:boolean) => void;
