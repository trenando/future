import React from "react";
import { Loader } from "../Loader/Loader";
import { LoadMoreProps } from "./LoanMoreTypes";

export const LoadMore: React.FC<LoadMoreProps> = ({ totalItems, startIndex, maxResults, paginate, isLoaded }) => {

    return <>
        {
            totalItems > startIndex + maxResults
                ?
                isLoaded ? <Loader /> : <button onClick={paginate}>Load more</button>
                :
                null
        }
    </>
};