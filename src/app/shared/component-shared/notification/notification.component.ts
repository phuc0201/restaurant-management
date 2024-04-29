import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { NzNotificationModule, NzNotificationService } from 'ng-zorro-antd/notification';
const plugins = [
  CommonModule,
  NzNotificationModule
];
@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss'],
  standalone: true
})
export class NotificationComponent implements OnInit {
  @Input() isNotificationsEnabled: boolean = false;

  constructor(
    private notification: NzNotificationService,
  ) { }

  createNotification(type: string): void {
    this.notification.create(
      type,
      'Đơn hàng mới',
      'Bạn có một đơn hàng mới từ Trịnh Hoàng Phúc'
    );
  }

  ngOnInit(): void {

  }

}
