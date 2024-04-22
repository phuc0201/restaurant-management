import { createFeatureSelector, createReducer, createSelector, on } from "@ngrx/store";
import * as authActions from './auth.actions';
import { AuthState } from "./auth.state";
export const initialState: AuthState = {
  token: {
    accessToken: '',
    refreshToken: ''
  },
  error: ''
};

const _authReducer = createReducer(
  initialState,
  on(authActions.loginSuccess, (state, { token }) => {
    return {
      ...state,
      token: token,
    };
  }),
  on(authActions.loginFailure, (state, { error }) => {
    return {
      ...state,
      error: error,
    };
  }),
);
export function authReducer(state: any, action: any) {
  return _authReducer(state, action);
}

export const selectAuthState = createFeatureSelector<AuthState>('auth_login');

export const selectToken = createSelector(
  selectAuthState,
  (state) => state.token
);
