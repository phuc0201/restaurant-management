import { Component, OnInit } from '@angular/core';
import { RestaurantService } from 'src/app/core/services/restaurant.service';

@Component({
  selector: 'app-main-header',
  templateUrl: './main-header.component.html',
  styleUrls: ['./main-header.component.scss']
})
export class MainHeaderComponent implements OnInit {
  isOpened: boolean = false;

  constructor(
    private resSrv: RestaurantService
  ) { }
  ngOnInit(): void {
    this.isOpened = JSON.parse(localStorage.getItem('isOpened') || 'false');
  }

  changeRestaurantStatus(): void {
    this.isOpened = !this.isOpened;
    this.resSrv.changeRestaurantStatus(this.isOpened);
  }
}
