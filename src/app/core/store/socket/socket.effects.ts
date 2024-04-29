import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, exhaustMap, of } from "rxjs";
import { SocketService } from "../../services/socket.service";
import * as socketAction from './socket.actions';
@Injectable()
export class SocketEffects {
  constructor(
    private action$: Actions,
    private socket: SocketService
  ) { }

  _connect = createEffect(() =>
    this.action$.pipe(
      ofType(socketAction.connectSocket),
      exhaustMap(() => {
        this.socket.connect();
        return of(socketAction.connectSuccess({ status: 'connected' }));
      }),
      catchError(error => {
        this.socket.disconnect();
        return of(socketAction.connectFailure({ status: 'disconnected', error: error }));
      })
    )
  );

  _disconnect = createEffect(() =>
    this.action$.pipe(
      ofType(socketAction.disconnectSocket),
      exhaustMap(() => {
        this.socket.disconnect();
        return of(socketAction.disconnectSuccess({ status: 'disconnected' }));
      }),
      catchError(error => {
        return of(socketAction.disconnectFailure({ status: 'disconnected', error: error }));
      })
    )
  );
}
