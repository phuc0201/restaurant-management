import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ProgressService } from 'src/app/core/services/progress.service';


const plugins = [
  CommonModule
];
@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.scss'],
  standalone: true,
  imports: plugins
})
export class ProgressBarComponent implements OnInit {
  progress$: number = 0;
  isShow: boolean = false;
  ngOnInit(): void {
    this.progressService.progress$.subscribe(data => {
      this.progress$ = data;
      this.isShow = data > 0;
    });
  }

  constructor(
    private progressService: ProgressService
  ) { }
}
