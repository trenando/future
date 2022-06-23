import React from "react";

export const Category: React.FC<{ categories: Array<string> | undefined }> = ({ categories }) => {
    return <>
        {
            categories
                ?
                <span>{categories[0]}</span>
                :
                null
        }
    </>;
};