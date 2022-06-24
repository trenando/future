import React from "react";
import { useNavigate } from "react-router-dom";
import { Item } from "../../redux/state/stateType";
import { Authors } from "./Authors/Authors";
import { Category } from "./Category/Category";
import { Image } from "./Image/Image";
import styles from "./Items.module.scss";
import { ItemsProps, Redirect } from "./ItemsTypes";

export const Items: React.FC<ItemsProps> = ({ items, loading }) => {

    const navigate = useNavigate()

    const redirect: Redirect = (bookId) => {
        loading(true)
        navigate(`book/${bookId}`)
    }

    return <div className={styles.items}>
        {
            items.map((item: Item, index: number) => {
                //При подгрзке items item.id могут повторяться
                return <div key={`${index}${item.id}`} onClick={() => redirect(item.id)} className={styles.item}>
                    <div className={styles.image}>
                        <Image links={item.volumeInfo.imageLinks} />
                    </div>
                    <div className={styles.content}>
                        <div className={item.volumeInfo.categories ? styles.category:styles.hide}>
                            <Category categories={item.volumeInfo.categories} />
                        </div>
                        <span>{item.volumeInfo.title}</span>
                        <div className={item.volumeInfo.authors ? styles.authors : styles.hide}>
                            <Authors authors={item.volumeInfo.authors} />
                        </div>
                    </div>
                </div>
            })
        }
    </div>
};