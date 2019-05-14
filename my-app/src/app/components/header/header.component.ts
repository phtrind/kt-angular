import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ProgressBarService } from 'src/app/services/progress-bar.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router, private progressBarService: ProgressBarService) { }

  ngOnInit() {
  }

  home(): void {
    this.router.navigateByUrl('');
    this.progressBarService.setProgressStatus(0);
  }

}
