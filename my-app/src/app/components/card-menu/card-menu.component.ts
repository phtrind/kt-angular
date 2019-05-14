import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

import { Menu } from 'src/app/models/menu';

@Component({
  selector: 'app-card-menu',
  templateUrl: './card-menu.component.html',
  styleUrls: ['./card-menu.component.css']
})
export class CardMenuComponent implements OnInit {
  @Input() item: Menu;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  menuSelected(): void {
    this.router.navigateByUrl(this.item.route);
  }

}
