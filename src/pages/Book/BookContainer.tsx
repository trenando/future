import React, { useCallback, useEffect, useMemo } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getBook, unmountAC } from "../../redux/actions/book/bookAction";
import { useAppDispatch } from "../../redux/ReduxTypes";
import { BookState } from "../../redux/state/stateType";
import { Book } from "./Book";
import { BookProps } from "./BookTypes";

export const BookContainer = () => {
    const dispatch = useAppDispatch()

    const { bookId } = useParams()

    const isLoaded = useSelector(({ search }: { search: { isLoaded: boolean } }) => search.isLoaded);
    const book = useSelector(({ book }: { book: { book: BookState } }) => book.book);
    const errorMessage = useSelector(({ error }: { error: { errorMessage: string | null } }) => error.errorMessage)

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
        if (bookId) dispatch(getBook(bookId))
    }, [dispatch, bookId])

    const unmount = useCallback(() => {
        dispatch(unmountAC())
    }, [dispatch])

    useEffect(() => {
        bookById()
    }, [bookById])

    useEffect(() => {
        return () => unmount()
    }, [unmount])

    const bookProps: BookProps = {
        ...memoBook,
        ...memoErrorMessage,
        ...memoIsLoaded,
    }

    return <Book {...bookProps} />
};