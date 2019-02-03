import {
    Action,
    applyMiddleware,
    combineReducers,
    createStore,
    Reducer,
    Store,
} from "redux";
import ReduxThunk, { ThunkMiddleware } from "redux-thunk";

export interface Reducers {
    [key: string]: Reducer;
}

export function createReduxStore<StateType, ActionsType extends Action<any>>(reducers: Reducers) {
    return createStore(
        combineReducers(reducers),
        applyMiddleware(ReduxThunk as ThunkMiddleware<StateType, ActionsType>),
    );
}
