import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { IToken } from 'src/app/core/models/common/response-data.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  token!: IToken;
  constructor(
    private store: Store
  ) { }
  ngOnInit(): void {

  }
}
