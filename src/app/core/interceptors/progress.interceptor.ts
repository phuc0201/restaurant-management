import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, finalize } from "rxjs";
import { ProgressService } from "../services/progress.service";

@Injectable()
export class ProgressInterceptor implements HttpInterceptor {
  constructor(private progressBarService: ProgressService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let progress = 0;
    const interval = setInterval(() => {
      if (progress == 0) {
        progress += 0.1;
      }
      else if (progress < 80) {
        progress += 10;
      }
      this.progressBarService.setProgress(progress);
    }, 100);

    return next.handle(req).pipe(
      finalize(() => {
        this.progressBarService.setProgress(100);
        this.progressBarService.resetProgress();
        clearInterval(interval);
      })
    );
  }
}
