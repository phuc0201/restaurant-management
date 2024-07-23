import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { URLConstant } from '../constants/url.constant';
import { Account } from '../models/account/account.model';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  private baseUrl = URLConstant.API.END_POINT + '/admin';
  constructor(
    private http: HttpClient
  ) { }

  getListAccount(): Observable<Account[]> {
    return this.http.get<Account[]>(this.baseUrl + '/customers');
  }

  changeAccountStatua(verified: boolean, _id: string) {
    return this.http.patch(this.baseUrl + '/change-account-status', {
      verified: verified,
      _id: _id
    });
  }

  getAccountDetails(id: string): Observable<Account> {
    return this.http.get<Account>(this.baseUrl + `/customer/${id}/details`);
  }
}
