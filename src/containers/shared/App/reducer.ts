/**
 * AppReducer
 *
 *  全局的reducer
 *
 * Example
 * case YOUR_ACTION_CONSTANT:
 *  return state.set('yourStateVarivle', yourActionPayload)
 */

import { fromJS } from "immutable";
import { AnyAction } from "redux";

import * as types from './constants'

// The initial state of the App

const initialState = fromJS({
    loading: false,
});

function appReducer(state = initialState, action: AnyAction) {
    switch (action.type) {
        case types.DEMO_TYPE:
            return state
                .set("loading", true)

        default:
            return state;
    }
}

export default appReducer;
