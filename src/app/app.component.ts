import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { Item } from './sharedModels/moduloMenu.model';
import { LoginService } from './sharedServices/login.services';
import { MenuLateralComponent } from './inicio/menu-lateral/menu-lateral.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'SiglaWebApplication';
  public logadoS: boolean = false;
  itensMenu: any;
  itenMenu: any;
  result: any;
  reload = true;
  dominio: string | null = '0';
  listaPermissao: string[] = [];

  permissoesMenu: string[] = [];

  // Listas menu Item
  moduloItemLista: any[] = [];

  // Itens menu USUÁRIO
  itemMenuNew!: Item;
  itemMenuUsuario: Item[] = [];
  itemMenuUsuarioRelatorio: Item[] = [];

  itemMenuCoordenacao: Item[] = [];
  itemMenuEscala: Item[] = [];
  itemMenuLiberacao: Item[] = [];
  itemMenuPaginasRodoviarias: Item[] = [];
  itemMenuSistema: Item[] = [];

  constructor(private loginService: LoginService) {}

  ngOnInit(): void {
    this.logadoSim();
  }

  logadoSim() {
    this.dominio = localStorage.getItem('dominioSigla');
    if (this.dominio == '1') {
      var userSigla = localStorage.getItem('userSigla');
      this.logadoS = true;
      this.itensMenu = JSON.parse(userSigla!);
      this.itensMenu = this.itensMenu.Menus;
      for (var i = 0; i < this.itensMenu.length; i++) {
        this.listaPermissao.push(this.itensMenu[i].codigo_funcao);
      }
      return this.logadoS;
    } else {
      return (this.logadoS = false);
    }
  }

  content_flex_left() {
    if (this.dominio == '1') {
      return MenuLateralComponent.wrapper ? '65' : '256';
    }
    return null;
  }

  content_flex_top() {
    if (this.dominio == '1') {
      return '80';
    }
    return null;
  }

  sair() {
    this.loginService.logoutUsuario();
    this.logadoS = false;
  }
}
