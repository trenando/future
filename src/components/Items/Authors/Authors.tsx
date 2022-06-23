import React from "react";

export const Authors = ({ authors }: any) => {
    return <>
        {
            authors
                ?
                <div>
                    {authors.map((author: string) => <span key={author}>{author}</span>)}
                </div>
                :
                null
        }
    </>;
};