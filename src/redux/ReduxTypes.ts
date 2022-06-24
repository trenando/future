import { useDispatch } from "react-redux";
import { AnyAction } from "redux";
import { ThunkAction, ThunkDispatch } from "redux-thunk";
import { rootReducer } from "./redux-store";

export type RootState = ReturnType<typeof rootReducer>

export type AppDispatch = ThunkDispatch<RootState, any, AnyAction>

export const useAppDispatch: () => AppDispatch = useDispatch

export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    AnyAction
>