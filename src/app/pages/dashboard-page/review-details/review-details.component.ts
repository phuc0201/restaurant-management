import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-review-details',
  templateUrl: './review-details.component.html',
  styleUrls: ['./review-details.component.scss']
})
export class ReviewDetailsComponent {
  @Input() opened: boolean = false;
  @Output() openedChange = new EventEmitter<boolean>();
  isLoading: boolean = false;


  closeDrawer(): void {
    this.opened = false;
    this.openedChange.emit(this.opened);
  }
}
