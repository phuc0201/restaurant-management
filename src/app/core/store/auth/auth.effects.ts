import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, exhaustMap, map, of, tap } from 'rxjs';
import { AuthService } from '../../services/auth.service';
import * as authActions from './auth.actions';
@Injectable()
export class AccountEffects {
  constructor(
    private action$: Actions,
    private authSrv: AuthService,
    private router: Router
  ) { }

  _loginResquest = createEffect(() =>
    this.action$.pipe(
      ofType(authActions.loginRequest),
      exhaustMap((action) =>
        this.authSrv.doLogin(action.accCred).pipe(
          map((token) => authActions.loginSuccess({ token })),
          catchError((error) => of(authActions.loginFailure({ error })))
        )
      )
    )
  );

  _loginSuccess$ = createEffect(
    () =>
      this.action$.pipe(
        ofType(authActions.loginSuccess),
        tap((token) => {
          this.router.navigateByUrl('/');
          this.authSrv.setToken(token.token);
          alert(
            'Login Successful! ' +
            'Welcome, '
          );
        })
      ),
    { dispatch: false }
  );
}
