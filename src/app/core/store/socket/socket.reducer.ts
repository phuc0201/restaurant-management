import { createReducer, on } from "@ngrx/store";
import * as socketAction from './socket.actions';
import { initialSocketState } from "./socket.state";
const _socketReducer = createReducer(
  initialSocketState,
  on(socketAction.connectSuccess, (state, { status }) => {
    return {
      ...state,
      status: status
    };
  }),
  on(socketAction.connectFailure, (state, { status, error }) => {
    return {
      ...state,
      status: status,
      error: error
    };
  })
);
export function socketReducer(state: any, action: any) {
  return _socketReducer(state, action);
}
