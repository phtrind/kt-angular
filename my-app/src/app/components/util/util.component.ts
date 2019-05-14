import { Component, OnInit } from '@angular/core';
import { ProgressBarService } from 'src/app/services/progress-bar.service';

@Component({
  selector: 'app-util',
  templateUrl: './util.component.html',
  styleUrls: ['./util.component.css']
})
export class UtilComponent implements OnInit {

  constructor(private progressBar: ProgressBarService) { }

  ngOnInit() {
    this.progressBar.setProgressStatus(100);
  }

}
