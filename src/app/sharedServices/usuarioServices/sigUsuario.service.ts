import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpRequest, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AppConstants } from 'src/app/AppConstants';
import {
  SigFuncaoUsuario,
  SigGrupoUsuario,
  SigPerfilUsuario,
  SigUsuario,
  SigUsuarioFuncao,
  SigUsuarioPerfil,
} from 'src/app/sharedModels/usuarioModels/sigUsuario.model';
import { map } from 'rxjs/operators';
import { SigUsuarioGrupo } from 'src/app/sharedModels/usuarioModels/sigUsuarioGrupo.model';
import { SigPerfilUsuarioTable } from 'src/app/sharedModels/usuarioModels/sigPerfilUsuario.model';

@Injectable()
export class SigUsuarioService {
  constructor(private http: HttpClient, private router: Router) {}

  public deleteSigUsuario(id: number) {
    return this.http.delete(AppConstants.baseSigUsuario + `/${id}`);
  }

  public deleteSigFuncao(sigFuncaoUsuario: SigFuncaoUsuario) {
    return this.http.delete(
      AppConstants.baseSigUsuario +
        `/UsuarioFuncao?codfuncao=${
          sigFuncaoUsuario.codfuncao +
          '&sequsuario=' +
          sigFuncaoUsuario.sequsuario
        }`
    );
  }
  public deleteSigFuncaoTodas(sigFuncaoUsuario: any) {
    return this.http.delete(
      AppConstants.baseSigUsuario +
        `/UsuarioFuncao?codfuncao=${
          sigFuncaoUsuario.codfuncao +
          '&sequsuario=' +
          sigFuncaoUsuario.sequsuario
        }`
    );
  }

  public deleteSigGrupo(sigGrupoUsuario: SigGrupoUsuario) {
    return this.http.delete(
      AppConstants.baseSigUsuario +
        `/UsuarioGrupo/${
          sigGrupoUsuario.seqgrupo + '-' + sigGrupoUsuario.sequsuario
        }`
    );
  }

  public deleteSigPerfil(sigPerfilUsuario: SigPerfilUsuario) {
    return this.http.delete(
      AppConstants.baseSigUsuario +
        `/UsuarioPerfil?seqperfil=${
          sigPerfilUsuario.seqperfil +
          '&sequsuario=' +
          sigPerfilUsuario.sequsuario
        }`
    );
  }

  public getSigUsuariosById(id: number): Observable<SigUsuario> {
    return this.http.get<SigUsuario>(AppConstants.baseSigUsuario + `/${id}`);
  }

  public getSigPerfilUsuarios(
    idperfil: number
  ): Observable<SigPerfilUsuarioTable> {
    return this.http.get<SigPerfilUsuarioTable>(
      AppConstants.baseSigPerfis + `/UsuariosPorPerfil/${idperfil}`
    );
  }

  public getFuncoesSigUsuarioById(id: number): Observable<SigUsuarioFuncao> {
    return this.http.get<SigUsuarioFuncao>(
      AppConstants.baseSigUsuario + `/UsuarioFuncao/${id}`
    );
  }

  public getPerfisSigUsuarioById(
    id: number
  ): Observable<SigPerfilUsuarioTable> {
    return this.http.get<SigPerfilUsuarioTable>(
      AppConstants.baseSigUsuario + `/UsuarioPerfil/${id}`
    );
  }

  public getGruposSigUsuarioById(id: number): Observable<SigUsuarioGrupo> {
    return this.http.get<SigUsuarioGrupo>(
      AppConstants.baseSigUsuario + `/UsuarioGrupo/${id}`
    );
  }

  public pesquisaFuncao(query: string) {
    let token = localStorage.getItem('tokenSigla');
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    });
    let options = {
      headers,
    };
    return this.http
      .post<{ payload: Array<SigUsuarioPerfil> }>(
        AppConstants.baseSigUsuario + `/Usuario`,
        { payload: query },
        options
      )
      .pipe(map((data) => data.payload));
  }

  public getSigUsuario(): Observable<SigUsuario> {
    return this.http.get(AppConstants.baseSigUsuarios);
  }

  // Salvar usuário
  public saveSigUsuario(sigUsuario: SigUsuario) {
    let token = localStorage.getItem('tokenSigla');
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });
    let options = {
      headers,
    };
    return this.http.post(AppConstants.baseSigUsuario, sigUsuario, options);
  }

  // Salvar perfil
  public saveSigPerfilUsuario(sigPerfilUsuario: SigPerfilUsuario) {
    let token = localStorage.getItem('tokenSigla');
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });
    let options = {
      headers,
    };
    return this.http.post(
      AppConstants.baseSigUsuario + `/UsuarioPerfil`,
      sigPerfilUsuario,
      options
    );
  }

  // Salvar função
  public saveSigFuncaoUsuario(sigFuncaoUsuario: SigFuncaoUsuario) {
    let token = localStorage.getItem('tokenSigla');
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });
    let options = {
      headers,
    };
    return this.http.post(
      AppConstants.baseSigUsuario + `/UsuarioFuncao`,
      sigFuncaoUsuario,
      options
    );
  }

  // Desativar
  public putSigUsuario(sigUsuario: SigUsuario) {
    let token = localStorage.getItem('tokenSigla');
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    });
    let options = {
      headers,
    };
    return this.http.post(AppConstants.baseSigUsuarioDesativa, sigUsuario);
  }

  // Editar
  public putEditaSigUsuario(sigUsuario: SigUsuario) {
    let token = localStorage.getItem('tokenSigla');
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      // 'Authorization': `Bearer ${token}`
    });
    let options = {
      headers,
    };
    return this.http.put(AppConstants.baseSigUsuario, sigUsuario, options);
  }

  // Redefinir senha
  public resetSenhaSigUsuario(sigUsuario: SigUsuario) {
    let token = localStorage.getItem('tokenSigla');
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    });
    let options = {
      headers,
    };
    return this.http.post(AppConstants.baseSigUsuarioResetSenha, sigUsuario);
  }
}
