/**
 * The global state selectors
 * 
 * 添加一个selector（functoin），提取state的数据并计算
 * 
 * Example
 *  const yourSelector = state => state.get('rootStateField')
 * 
 * or
 *  const yourSelect = () => createSelector(parentSelector, selectorState => selectorState.get('stateField') )
 * 
 */

import { createSelector } from "reselect";

export const selectGlobal = state => state.get("global");

export const selectRoute = state => state.get("route");


export const makeSelectLoading = () =>
    createSelector(selectGlobal, globalState => globalState.get("loading"));
