import { Component, OnInit } from '@angular/core';
import { Item } from 'src/app/sharedModels/moduloMenu.model';
import { LoginService } from 'src/app/sharedServices/login.services';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-menu-lateral',
  templateUrl: './menu-lateral.component.html',
  styleUrls: ['./menu-lateral.component.css'],
})
export class MenuLateralComponent implements OnInit {

  static wrapper: boolean = false;

  constructor(private loginService: LoginService) {}

  public show() {
    MenuLateralComponent.wrapper = !MenuLateralComponent.wrapper;
  }

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
  sair() {
    this.loginService.logoutUsuario();
    this.logadoS = false;
  }
  // public ListaMenu(){
  //   this.spinner.show()
  //   for (let i = 0; i < this.itensMenu.length; i++) {
  //     this.moduloItemLista.push(this.itensMenu[i]);
  //     this.criarMenus(this.itensMenu[i])
  //   }
  //   this.spinner.hide()
  // }

  criarMenus(item: Item) {}
}
function getInstance(arg0: any) {
  throw new Error('Function not implemented.');
}

