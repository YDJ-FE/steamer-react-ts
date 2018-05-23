/**
 * Selector
 */

import { createSelector } from "reselect";

export const homeSelector = state =>
    state.get("home");
