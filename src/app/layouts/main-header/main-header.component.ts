import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { RestaurantService } from 'src/app/core/services/restaurant.service';
import { connectSocket, disconnectSocket } from 'src/app/core/store/socket/socket.actions';
import { socketSelector } from 'src/app/core/store/socket/socket.selector';

@Component({
  selector: 'app-main-header',
  templateUrl: './main-header.component.html',
  styleUrls: ['./main-header.component.scss']
})
export class MainHeaderComponent implements OnInit {
  isOpened: boolean = false;
  notificationCount: number = 99;
  isNotificationsEnabled: boolean = true;
  constructor(
    private resSrv: RestaurantService,
    private store: Store
  ) { }

  ngOnInit(): void {
    let opened = JSON.parse(localStorage.getItem('isOpened') || 'false');
    this.isOpened = opened;
    this.connectToSocket();
  }


  changeRestaurantStatus(): void {
    this.isOpened = !this.isOpened;
    this.resSrv.changeRestaurantStatus(this.isOpened);
    this.connectToSocket();
  }

  connectToSocket(): void {
    this.store.pipe(select(socketSelector)).subscribe((status) => {
      if (this.isOpened)
        this.store.dispatch(connectSocket());
      else if (!this.isOpened) {
        this.store.dispatch(disconnectSocket());
      }
    });
  }
}
