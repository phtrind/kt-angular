import { Component, OnInit } from '@angular/core';
import { ProgressBarService } from 'src/app/services/progress-bar.service';

@Component({
  selector: 'app-concepts',
  templateUrl: './concepts.component.html',
  styleUrls: ['./concepts.component.css']
})
export class ConceptsComponent implements OnInit {

  constructor(private progressBar: ProgressBarService) { }

  ngOnInit() {
    this.progressBar.setProgressStatus(50);
  }

}
