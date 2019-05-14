import { Injectable } from '@angular/core';
import { Subject, observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProgressBarService {
  status$: Subject<number>;
  status: number;

  constructor() {
    this.status$ = new Subject<number>();
    this.status$.subscribe(x => {
      this.status = x;
    });
   }

   setProgressStatus(percent: number): void {
    this.status$.next(percent);
   }

   getProgressStatus(): number {
     if (this.status) {
       return this.status;
     } else {
       return 0;
     }
   }
}
