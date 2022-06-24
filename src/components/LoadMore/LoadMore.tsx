import React from "react";
import { Loader } from "../Loader/Loader";
import { LoadMoreProps } from "./LoanMoreTypes";
import styles from './LoadMore.module.scss';

export const LoadMore: React.FC<LoadMoreProps> = ({ totalItems, startIndex, maxResults, paginate, isLoaded }) => {

    return <>
        {
            totalItems > startIndex + maxResults
                ?
                isLoaded
                    ?
                    <Loader />
                    :
                    <div className={styles.block}>
                        <button onClick={paginate} className={styles.button}>Load more</button>
                    </div>
                :
                null
        }
    </>
};