import React from "react";
import { Link } from "react-router-dom";
import { Authors } from "../../components/Items/Authors/Authors";
import { Category } from "../../components/Items/Category/Category";
import { Image } from "../../components/Items/Image/Image";
import { Loader } from "../../components/Loader/Loader";
import { BookProps } from "./BookTypes";

export const Book: React.FC<BookProps> = ({ volumeInfo, errorMessage, isLoaded }) => {
    if (!volumeInfo || isLoaded) {
        return <Loader />
    }
    if (errorMessage) {
        return <div>
            <span>{errorMessage}</span>
            <Link to="/">Вернуться назад</Link>
        </div>
    }
    const { title, subtitle, authors, categories, imageLinks } = volumeInfo;
    return (
        <div>
            <div>
                <div>
                    <Image links={imageLinks} />
                </div>
                <div>
                    <span>{title}</span>
                    <span>{subtitle}</span>
                    <Authors authors={authors} />
                    <Category categories={categories} />
                </div>
            </div>
            <Link to="/">Вернуться назад</Link>
        </div>
    )
};