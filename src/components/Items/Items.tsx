import React from "react";
import { Item } from "../../redux/state/stateType";
import { Authors } from "./Authors/Authors";
import { Image } from "./Image/Image";

export const Items: React.FC<{ items: Array<Item> }> = ({ items }) => {

    const redirect = (bookId: string) => {
        console.log(bookId);
    }

    return <>
        {
            items.map((item: Item) => {
                return <div key={item.id} onClick={() => redirect(item.id)}>
                    <span>{item.id}</span>
                    <Image links={item.volumeInfo.imageLinks} />
                    {
                        item.volumeInfo.categories
                            ?
                            <span>{item.volumeInfo.categories[0]}</span>
                            :
                            null
                    }
                    <span>{item.volumeInfo.title}</span>
                    <Authors authors={item.volumeInfo.authors} />
                </div>
            })
        }
    </>
};