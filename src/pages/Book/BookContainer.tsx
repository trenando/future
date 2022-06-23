import React, { useCallback, useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Dispatch } from "redux";
import { getBook } from "../../redux/actions/book/bookAction";
import { BookState } from "../../redux/state/stateType";
import { Book } from "./Book";
import { BookProps } from "./BookTypes";

export const BookContainer = () => {
    const dispatch: Dispatch<any> = useDispatch()

    const { bookId } = useParams()

    const isLoaded = useSelector(({ search }: { search: { isLoaded: boolean } }) => search.isLoaded);
    const book = useSelector(({ book }: { book: { book: BookState } }) => book.book);
    const errorMessage = useSelector(({ error }: { error: { message: string | null } }) => error.message)

    const memoErrorMessage = useMemo(() => {
        return {
            errorMessage,
        };
    }, [errorMessage]);

    const memoIsLoaded = useMemo(() => {
        return {
            isLoaded
        }
    }, [isLoaded])

    const memoBook = useMemo(() => {
        return {
            ...book
        }
    }, [book])

    const bookById = useCallback(() => {
        dispatch(getBook(bookId as string))
    }, [dispatch, bookId])

    useEffect(() => {
        bookById()
    }, [bookById])

    const bookProps: BookProps = {
        ...memoBook,
        ...memoErrorMessage,
        ...memoIsLoaded
    }

    return <Book {...bookProps} />
};