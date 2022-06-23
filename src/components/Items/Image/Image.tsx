import React from "react";
import styles from "./Image.module.scss"

export const Image: React.FC<{ links: { thumbnail: string } | undefined }> = ({links}) => {
    return <>
        {
            links
                ?
                <img src={links.thumbnail} alt="" />
                :
               <div className={styles.no__image}>
                <span>No Image</span>
               </div>
        }
    </>
};