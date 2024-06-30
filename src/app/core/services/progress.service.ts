import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProgressService {
  private progressSubject = new BehaviorSubject<number>(0);
  progress$ = this.progressSubject.asObservable();

  constructor() { }

  setProgress(progress: number) {
    this.progressSubject.next(progress);
  }

  resetProgress() {
    setTimeout(() => {
      this.progressSubject.next(0);
    }, 500);
  }
}
