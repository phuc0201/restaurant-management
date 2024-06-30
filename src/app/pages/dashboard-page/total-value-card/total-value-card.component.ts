import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-total-value-card',
  templateUrl: './total-value-card.component.html',
  styleUrls: ['./total-value-card.component.scss']
})
export class TotalValueCardComponent {
  @Input() title: string = '';
  @Input() value: number = 0;
}
