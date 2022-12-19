import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Item } from 'src/app/sharedModels/moduloMenu.model';
import { LoginService } from 'src/app/sharedServices/login.services';
import { MenuLateralComponent } from '../menu-lateral/menu-lateral.component';

@Component({
  selector: 'app-topo',
  templateUrl: './topo.component.html',
  styleUrls: ['./topo.component.css'],
})
export class TopoComponent implements OnInit {
  [x: string]: any;

  title = 'SiglaAdmin';
  public logadoS: boolean = false;
  itensMenu: any;
  itenMenu: any;
  result: any;
  reload = true;
  dominio: string | null = '0';
  listaPermissao: string[] = [];

  permissoesMenu: string[] = [];
  //listas menu Item
  moduloItemLista: any[] = [];

  //itens menu USUÁRIO
  itemMenuNew!: Item;
  itemMenuUsuario: Item[] = [];
  itemMenuUsuarioRelatorio: Item[] = [];

  itemMenuCoordenacao: Item[] = [];
  itemMenuEscala: Item[] = [];
  itemMenuLiberacao: Item[] = [];
  itemMenuPaginasRodoviarias: Item[] = [];
  itemMenuSistema: Item[] = [];

  open: boolean = false; // open or close, default false.


  constructor(
    private loginService: LoginService,
    private router: Router,
    ) {}

  ngOnInit(): void {
    this.logadoSim();
  }

  logadoSim() {
    if(localStorage.getItem('dominioSigla') == '1') {
      var userSigla = localStorage.getItem('userSigla');
      this.logadoS = true;
      this.itensMenu = JSON.parse(userSigla!);
      this.tripulante = this.itensMenu;
      this.itensMenu = this.itensMenu.Menus;
      for (var i = 0; i < this.itensMenu.length; i++) {
        this.listaPermissao.push(this.itensMenu[i].codigo_funcao);
      }
      return this.logadoS;
    }
    else if(localStorage.getItem('dominioSigla') == '2') {
      var userSigla = localStorage.getItem('userSigla');
      this.router.navigate(['portalMotorista']);
      return this.logadoS;
    }
    else if(localStorage.getItem('dominioSigla') == '3') {
      var userSigla = localStorage.getItem('userSigla');
      this.router.navigate(['partidaschegadas']);
      return this.logadoS;
    }
    else {
      this.loginService.logoutUsuario();
      return (this.logadoS = false);
    }
  }

  side() {
    this.open = !this.open;
  }

  sair() {
    this.loginService.logoutUsuario();
    this.logadoS = false;
  }
}
