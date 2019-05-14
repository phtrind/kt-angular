import { ProgressBarService } from 'src/app/services/progress-bar.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.css']
})
export class IntroComponent implements OnInit {

  constructor(private progressBar: ProgressBarService) { }

  ngOnInit() {
    this.progressBar.setProgressStatus(25);
  }

}
