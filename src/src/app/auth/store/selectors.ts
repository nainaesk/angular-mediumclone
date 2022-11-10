
import { createSelector } from "@ngrx/store";
// import { AppStateInterface } from "src/app/shared/types/appState.interface";
import { AppStateInterface } from "../../shared/types/appState.interface";
import { AuthStateInterface } from "../types/authState.interface";

/**Selectors are pure functions used for obtaining slices of store state. */
export const authFeatureSelector = (state: AppStateInterface): AuthStateInterface => state.auth;

/** createSelector and createFeatureSelector functions @ngrx/store 
 *  keeps track of the latest arguments in which your selector function was invoked */
export const isSubmittingSelector = createSelector(
    authFeatureSelector,
    (authState: AuthStateInterface) => authState.isSubmitting //Functions making transformations
)