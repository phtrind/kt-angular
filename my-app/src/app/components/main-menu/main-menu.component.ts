import { Component, OnInit } from '@angular/core';

import { Menu } from 'src/app/models/menu';

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.css']
})
export class MainMenuComponent implements OnInit {
  opcoes: Menu[];

  constructor() {
    this.opcoes = [
      { title: 'Intrudução', description: 'Intodução ao Angular', route: 'intro'},
      { title: 'Conceitos', description: 'Principais conceitos', route: 'concepts'},
      { title: 'Benefícios', description: 'Principais pontos positivos', route: 'pros'},
      { title: 'Extras', description: 'Extensões e bibliotecas', route: 'util'}
    ];
  }

  ngOnInit() {
  }

}
