import { createFeatureSelector, createSelector } from "@ngrx/store";
import { SocketState } from "./socket.state";

export const selectSocketState = createFeatureSelector<SocketState>('restaurant');

export const socketSelector = createSelector(
  selectSocketState,
  (state) => state.status
);
