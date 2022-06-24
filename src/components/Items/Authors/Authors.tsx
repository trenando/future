import React from "react";

export const Authors: React.FC<{ authors: Array<string> | undefined }> = ({ authors }) => {
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