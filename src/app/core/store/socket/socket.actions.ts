import { createAction, props } from "@ngrx/store";

export const CONNECT = '[socket] connect';
export const DISCONNECT = '[socket] disconenct';

export const CONNECT_SUCCESS = '[socket] connect success';
export const CONNECT_FAILURE = '[socket] connect failed';

export const DISCONNECT_SUCCESS = '[socket] disconnect success';
export const DISCONNECT_FAILURE = '[socket] disconnect failed';

export const connectSocket = createAction(CONNECT);
export const disconnectSocket = createAction(DISCONNECT);

export const connectSuccess = createAction(
  CONNECT_SUCCESS,
  props<{ status: 'connected' | 'disconnected'; }>());

export const connectFailure = createAction(
  CONNECT_FAILURE,
  props<{ status: 'connected' | 'disconnected', error: string; }>());

export const disconnectSuccess = createAction(
  DISCONNECT_SUCCESS,
  props<{ status: 'connected' | 'disconnected'; }>());

export const disconnectFailure = createAction(
  DISCONNECT_FAILURE,
  props<{ status: 'connected' | 'disconnected', error: string; }>());
