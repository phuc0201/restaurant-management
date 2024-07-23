import { Component, Input } from '@angular/core';
import { UserInfo } from 'src/app/core/models/order/user-info.model';

@Component({
  selector: 'app-user-info-card',
  templateUrl: './user-info-card.component.html',
  styleUrls: ['./user-info-card.component.scss']
})
export class UserInfoCardComponent {
  @Input() userInfo = new UserInfo();
}
