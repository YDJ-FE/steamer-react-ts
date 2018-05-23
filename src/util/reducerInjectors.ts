/**
 * Reducer注入器
 */

import * as invariant from "invariant";
import { isEmpty, isFunction, isString } from "lodash";
import { Reducer } from "redux";

import createReducer, { RESET_SUB_STATE } from "../reducers";

export { RESET_SUB_STATE };

export function injectReducerFactory<T>(store: IStore<T>) {
    return function injectReducer(key: string, reducer: Reducer<any>) {
        // Check `store.injectedReducers[key] === reducer` for hot reloading when a key is the same but a reducer is different
        if (
            Reflect.has(store.injectedReducers, key) &&
            store.injectedReducers[key] === reducer
        ) {
            return;
        }

        store.injectedReducers[key] = reducer;
        store.replaceReducer(createReducer(store.injectedReducers));
    };
}

export default function getInjectors<T>(store: IStore<T>) {
    return {
        injectReducer: injectReducerFactory(store)
    };
}
