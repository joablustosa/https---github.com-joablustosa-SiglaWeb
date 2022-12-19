import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Usuario } from '../sharedModels/liberacaoModels/usuarioModel';
import { AppConstants } from '../AppConstants';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { JwtHelperService } from '@auth0/angular-jwt';
import { NgxSpinnerService } from 'ngx-spinner';

@Injectable()
export class LoginService {
  jwtHelper = new JwtHelperService();
  decodedToken: any;

  constructor(
    private http: HttpClient,
    private router: Router,
    private toastr: ToastrService,
    private spinner: NgxSpinnerService
  ) {}

  openModal(sigUsuarioTemplate: any): void {
    sigUsuarioTemplate.show(sigUsuarioTemplate, {
      backdropClass: 'light-blue-backdrop',
    });
  }

  public atualizaSenha(senha: String, idUsuario: String) {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    let options = {
      headers,
    };

    return this.http
      .post(
        AppConstants.baseSigUsuariosAtualizaSenha,
        {
          idUsuario: idUsuario,
          novaSenha: senha,
        },
        options
      )
      .subscribe(
        () => {
          this.toastr.success('A senha foi redefinida com sucesso.');
        },
        () => {
          this.toastr.warning('A senha não pode ser redefinida.');
        }
      );
  }

  public efetivaLogin(usuarioApi: Usuario, template: any) {
    this.spinner.show();

    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    let options = {
      headers,
    };

    let mensagem: string = '';
    if (usuarioApi.dominio == '1') {
      return this.http
        .post(
          AppConstants.baseLogin,
          {
            usuarioLogin: usuarioApi.cpf,
            chaveDeAcesso: usuarioApi.senha,
            permissaoLogin: usuarioApi.dominio,
          },
          options
        )
        .subscribe(
          (data) => {
            this.spinner.show();

            var token = JSON.parse(JSON.stringify(data)).accessToken;
            var menu = JSON.parse(JSON.stringify(data)).menu;
            var flgaltera = JSON.parse(menu).flgaltera;
            var iddousuario = JSON.parse(menu).Id

            if (token != null) {
              if (flgaltera != 'N') {
                localStorage.setItem('iddousuario', iddousuario);
                this.openModal(template);
              } else {
                this.decodedToken = this.jwtHelper.decodeToken(token);
                var userSigla = JSON.stringify(JSON.parse(menu));
                localStorage.setItem('tokenSigla', token);
                localStorage.setItem('userSigla', userSigla);
                localStorage.setItem('dominioSigla', usuarioApi.dominio);
                window.location.reload();
                this.router.navigate(['inicio']);
              }
              this.spinner.hide();
            } else {
              mensagem = 'Usuário de funcionário ou senha incorreto';
              this.toastr.warning(mensagem);
              this.spinner.hide();
            }
            this.spinner.hide();
          },
          (error) => {
            this.toastr.warning(
              'Entre em contato com o administrador da aplicação. '
            );
            this.spinner.hide();
          }
        );
    } else if (usuarioApi.dominio == '2') {
      return this.http
        .post(
          AppConstants.baseLogin,
          {
            usuarioLogin: usuarioApi.cpf,
            chaveDeAcesso: usuarioApi.senha,
            permissaoLogin: usuarioApi.dominio,
          },
          options
        )
        .subscribe(
          (data) => {
            this.spinner.show();

            var token = JSON.parse(JSON.stringify(data)).accessToken;
            var menu = JSON.parse(JSON.stringify(data)).menu;

            if (token != null) {
              this.decodedToken = this.jwtHelper.decodeToken(token);
              var userSigla = JSON.stringify(JSON.parse(menu));
              localStorage.setItem('tokenSigla', token);
              localStorage.setItem('userSigla', userSigla);
              localStorage.setItem('dominioSigla', usuarioApi.dominio);
              this.router.navigate(['portalMotorista']);
              this.spinner.hide();
            } else {
              mensagem = 'Usuário de tripulante ou senha incorretos';
              this.toastr.warning(mensagem);
              this.spinner.hide();
            }
            this.spinner.hide();
          },
          (error) => {
            this.toastr.warning('API login error');
            this.spinner.hide();
          }
        );
    } else if (usuarioApi.dominio == '3') {
      return this.http
        .post(
          AppConstants.baseLogin,
          {
            usuarioLogin: usuarioApi.cpf,
            chaveDeAcesso: usuarioApi.senha,
            permissaoLogin: usuarioApi.dominio,
          },
          options
        )
        .subscribe(
          (data) => {
            this.spinner.show();

            var token = JSON.parse(JSON.stringify(data)).accessToken;
            var menu = JSON.parse(JSON.stringify(data)).menu;
            var userSigla = JSON.stringify(JSON.parse(menu));

            if (token != null) {
              this.decodedToken = this.jwtHelper.decodeToken(token);
              localStorage.setItem('tokenSigla', token);
              localStorage.setItem('dominioSigla', usuarioApi.dominio);
              localStorage.setItem('userSigla', userSigla!);
              this.router.navigate(['partidaschegadas']);
              this.spinner.hide();
            } else {
              mensagem = 'Usuário de localidade ou senha incorretos';
              this.toastr.warning(mensagem);
              this.spinner.hide();
            }
            this.spinner.hide();
          },
          (error) => {
            this.toastr.warning(
              'Entre em contato com o administrador da aplicação. '
            );
            this.spinner.hide();
          }
        );
    } else if (usuarioApi.dominio == '4') {
      return this.http
        .post(
          AppConstants.baseLogin,
          {
            usuarioLogin: usuarioApi.cpf,
            chaveDeAcesso: usuarioApi.senha,
            permissaoLogin: usuarioApi.dominio,
          },
          options
        )
        .subscribe(
          (data) => {
            this.spinner.show();
            var token = JSON.parse(JSON.stringify(data)).accessToken;
            if (token != null) {
              this.decodedToken = this.jwtHelper.decodeToken(token);
              localStorage.setItem('tokenSigla', token);
              localStorage.setItem('dominioSigla', usuarioApi.dominio);
              this.router.navigate(['adminApp']);
              this.spinner.hide();
            } else {
              mensagem = 'Seu usuário e senha podem estar incorretos';
              this.toastr.warning(mensagem);
              this.spinner.hide();
            }
            this.spinner.hide();
          },
          (error) => {
            this.toastr.warning('API login error');
            this.spinner.hide();
          }
        );
    } else {
      mensagem = 'Verifique os dados';
      this.toastr.warning(mensagem);
      this.spinner.hide();
    }
    return usuarioApi;
  }

  logado() {
    if (
      localStorage.getItem('tokenSigla') != null &&
      localStorage.getItem('dominioSigla') != null
    ) {
      if (localStorage.getItem('dominioSigla') === '1') {
        this.router.navigate(['inicio']);
      } else if (localStorage.getItem('dominioSigla') === '2') {
        this.router.navigate(['portalMotorista']);
      } else if (localStorage.getItem('dominioSigla') === '3') {
        this.router.navigate(['partidaschegadas']);
      } else if (localStorage.getItem('dominioSigla') === '4') {
        this.router.navigate(['adminApp']);
      }
    } else {
      this.toastr.warning('ERRO BLABLABLA');
    }
  }

  logoutUsuario() {
    localStorage.removeItem('tokenSigla');
    localStorage.removeItem('dominioSigla');
    localStorage.removeItem('userSigla');
    this.toastr.warning('Você não está mais logado!');
    this.router.navigate(['']);
  }

  logoutMotorista() {
    localStorage.removeItem('tokenSigla');
    localStorage.removeItem('dominioSigla');
    localStorage.removeItem('userSigla');
    this.toastr.warning('Você não está mais logado!');
    this.router.navigate(['']);
  }
}
