import { Component, OnInit } from '@angular/core';
import { ProgressBarService } from 'src/app/services/progress-bar.service';

@Component({
  selector: 'app-pros',
  templateUrl: './pros.component.html',
  styleUrls: ['./pros.component.css']
})
export class ProsComponent implements OnInit {

  constructor(private progressBar: ProgressBarService) { }

  ngOnInit() {
    this.progressBar.setProgressStatus(75);
  }

}
