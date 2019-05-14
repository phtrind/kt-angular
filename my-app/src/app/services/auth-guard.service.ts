import { ProgressBarService } from 'src/app/services/progress-bar.service';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(private progressBarService: ProgressBarService) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

      if (state.url === '/concepts' && this.progressBarService.getProgressStatus() < 25) {
        return false;
      } else if (state.url === '/pros' && this.progressBarService.getProgressStatus() < 50) {
        return false;
      } else if (state.url === '/util' && this.progressBarService.getProgressStatus() < 75) {
        return false;
      }

      return true;
  }

}
