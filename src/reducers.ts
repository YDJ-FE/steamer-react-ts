/**
 * Combine all reducers in this file and export the combined reducers.
 */

import { fromJS } from "immutable";
import { combineReducers } from "redux-immutable";
import { routerReducer } from "react-router-redux";
import * as Redux from "redux";

import globalReducer from "containers/shared/App/reducer";

// import testReducer from 'containers/views/CertificateList/reducer'

export const RESET_SUB_STATE = "ROOT/RESET_SUB_STATE";

/**
 * Creates the main reducer with the dynamically injected ones
 */
export default function createReducer(injectedReducers?) {
    const appReducer = combineReducers({
        // route: routeReducer, // TODO: check route state in redux
        router: routerReducer,
        global: globalReducer,
        ...injectedReducers
    });
    const rootReducers = (state, action) => {
        let s;
        switch (action.type) {
            case RESET_SUB_STATE:
                s = state.delete(action.key);
                break;
            default:
                s = state;
        }
        return appReducer(s, action);
    };
    return rootReducers;
}
