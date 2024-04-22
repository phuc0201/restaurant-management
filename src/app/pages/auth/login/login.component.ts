import { Component } from '@angular/core';
import { FormControl, FormGroup, NonNullableFormBuilder, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { ILoginDTO } from 'src/app/core/models/auth/account.model';
import { loginRequest } from 'src/app/core/store/auth/auth.actions';

export interface LoginForm {
  email: string,
  password: string,
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  showPassword: boolean = false;

  validateForm: FormGroup<{
    email: FormControl<string>;
    password: FormControl<string>;
  }> = this.fb.group({
    email: ['', [Validators.required]],
    password: ['', [Validators.required]],
  });

  constructor(
    private fb: NonNullableFormBuilder,
    private store: Store
  ) { }

  submitForm(): void {
    if (this.validateForm.valid) {
      const _obj: ILoginDTO = {
        email: this.validateForm.value.email as string,
        password: this.validateForm.value.password as string
      };
      this.store.dispatch(loginRequest({ accCred: _obj }));
    }
  }
}
