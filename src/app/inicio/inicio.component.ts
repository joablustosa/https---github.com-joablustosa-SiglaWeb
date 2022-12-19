import { Component, OnInit } from '@angular/core';
import { MenuLateralComponent } from './menu-lateral/menu-lateral.component';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  content_flex() {
    return MenuLateralComponent.wrapper ? '80' : '270';
  }

  constructor(

  ) { }

  ngOnInit(): void {
  }
}
