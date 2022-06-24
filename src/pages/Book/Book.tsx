import React from "react";
import { Link } from "react-router-dom";
import { Authors } from "../../components/Items/Authors/Authors";
import { Category } from "../../components/Items/Category/Category";
import { Image } from "../../components/Items/Image/Image";
import { Loader } from "../../components/Loader/Loader";
import { BookProps } from "./BookTypes";
import styles from "./Book.module.scss";

export const Book: React.FC<BookProps> = ({ volumeInfo, errorMessage, isLoaded }) => {
    if (isLoaded) {
        return <Loader />
    }
    if (errorMessage) {
        return <div className={styles.error}>
            <span>{errorMessage}</span>
            <div className={styles.return}>
                <Link to="/">Return back</Link>
            </div>
        </div>
    }
    if (!volumeInfo) return null
    const { title, subtitle, authors, categories, imageLinks } = volumeInfo;
    return (
        <div className={styles.section}>
            <div className={styles.block}>
                <div className={styles.image}>
                    <Image links={imageLinks} />
                </div>
                <div className={styles.content}>
                    <div className={categories ? styles.category : styles.hide}>
                        <Category categories={categories} />
                    </div>
                    <span className={styles.title}>{title}</span>
                    <div className={authors ? styles.authors : styles.hide}>
                        <Authors authors={authors} />
                    </div>
                    <span className={styles.subtitle}>{subtitle}</span>
                </div>
            </div>
            <div className={styles.return}>
                <Link to="/">Return back</Link>
            </div>
        </div>
    )
};