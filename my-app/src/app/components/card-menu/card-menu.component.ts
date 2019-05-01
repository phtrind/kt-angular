import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card-menu',
  templateUrl: './card-menu.component.html',
  styleUrls: ['./card-menu.component.css']
})
export class CardMenuComponent implements OnInit {
  @Input() title: string;
  @Input() description: string;
  @Input() route: string;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  menuSelected(): void {
    this.router.navigateByUrl(this.route);
  }

}
