import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { RestaurantService } from 'src/app/core/services/restaurant.service';
import { SocketService } from 'src/app/core/services/socket.service';
import { connectSocket, disconnectSocket } from 'src/app/core/store/socket/socket.actions';
import { socketSelector } from 'src/app/core/store/socket/socket.selector';
import { RestaurantStatus } from 'src/app/core/utils/enum';

@Component({
  selector: 'app-main-header',
  templateUrl: './main-header.component.html',
  styleUrls: ['./main-header.component.scss']
})
export class MainHeaderComponent implements OnInit {
  isOpened: boolean = false;
  notificationCount: number = 0;
  isNotificationsEnabled: boolean = true;
  resID: string = '';

  ngOnInit(): void {
    this.isOpened = false;
    this.resSrv.getInfor().subscribe({
      next: data => {
        this.resID = data._id;
        this.resSrv.resInfo.next(data);
        if (data.status === RestaurantStatus.OPEN)
          this.isOpened = true;
      },
      complete: () => {
        this.connectToSocket();
      }
    });
  }


  changeRestaurantStatus(): void {
    this.isOpened = !this.isOpened;
    const status = this.isOpened ? RestaurantStatus.OPEN : RestaurantStatus.CLOSED;
    this.resSrv.updateActiveStatus(status).subscribe({
      complete: () => {
        this.connectToSocket();
      }
    });
  }

  connectToSocket(): void {
    this.store.pipe(select(socketSelector)).subscribe((status) => {
      if (this.isOpened) {
        this.store.dispatch(connectSocket());
        this.socket.listenEvent(`restaurant.${this.resID}.new_order`).subscribe(data => {

        });
      }
      else if (!this.isOpened) {
        this.store.dispatch(disconnectSocket());
      }
    });
  }

  constructor(
    private resSrv: RestaurantService,
    private store: Store,
    private socket: SocketService
  ) { }

}
