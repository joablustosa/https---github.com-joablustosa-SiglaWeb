import { Component, OnInit } from '@angular/core';
import { Usuario } from '../sharedModels/liberacaoModels/usuarioModel';
import { ToastrService } from 'ngx-toastr';
import { LoginService } from '../sharedServices/login.services';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { NgxSpinnerModule, NgxSpinnerService } from 'ngx-spinner';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  FormGroupDirective,
  NgForm,
  ValidationErrors,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { MenuLateralComponent } from '../inicio/menu-lateral/menu-lateral.component';
import { ErrorStateMatcher } from '@angular/material/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [LoginService, JwtHelperService],
})
export class LoginComponent implements OnInit {
  title = 'Sigla Admin';
  loginForm!: FormGroup;
  newPasswordForm!: FormGroup;
  public usuarioApi: Usuario = new Usuario();
  show: boolean = false; // show or hide password, default false.
  matcher = new MyErrorStateMatcher();
  tripulante: any;
  userSigla: string | null | undefined;
  itensMenu: any;

  constructor(
    private loginService: LoginService,
    private toastr: ToastrService,
    public router: Router,
    private fb: FormBuilder,
    private spinner: NgxSpinnerService
  ) {}

  content_flex() {
    return MenuLateralComponent.wrapper ? '65' : '260';
  }

  ngOnInit(): void {
    if (localStorage.getItem('tokenSigla') != null) {
      if (localStorage.getItem('dominioSigla') == '1') {
        this.router.navigate(['inicio']);
      } else if (localStorage.getItem('dominioSigla') == '3') {
        this.router.navigate(['partidaschegadas']);
      }
    }
    this.validacaoLogin();
    this.validacaoNovaSenha();
  }

  perfisAcesso: PerfilAcesso[] = [
    { valor: '1', nomePerfil: 'Operação' },
    { valor: '2', nomePerfil: 'Motorista' },
    { valor: '3', nomePerfil: 'Rodoviária' },
    { valor: '4', nomePerfil: 'Administração APP' },
  ];

  // Validações
  checkPasswords: ValidatorFn = (
    group: AbstractControl
  ): ValidationErrors | null => {
    let pass = group.get('novaSenha')!.value;
    let confirmPass = group.get('confirmacaoNovaSenha')!.value;
    return pass === confirmPass ? null : { notSame: true };
  };

  validacaoNovaSenha() {
    this.newPasswordForm = this.fb.group(
      {
        senhaAtual: new FormControl(
          '',
          Validators.compose([
            Validators.required,
            Validators.pattern('^sigla$'),
          ])
        ),
        novaSenha: new FormControl(
          '',
          Validators.compose([
            Validators.maxLength(20),
            Validators.minLength(4),
            Validators.required,
          ])
        ),
        confirmacaoNovaSenha: new FormControl('', Validators.required),
      },
      { validators: this.checkPasswords }
    );
  }

  validacaoLogin() {
    this.loginForm = this.fb.group({
      cpf: ['', Validators.required],
      senha: ['', Validators.required],
      dominio: ['', Validators.required],
    });
  }

  validation_messages = {
    login: [
      {
        type: 'required',
        message: 'Campo obrigatório',
      },
    ],
    confirm_password: [
      {
        type: 'areEqual',
        message: 'As senhas devem ser iguais',
      },
    ],
    password: [
      {
        type: 'minlength',
        message: 'A nova senha deve ter no mínimo 4 caracteres',
      },
      {
        type: 'maxlength',
        message: 'A nova senha deve ter no máximo 20 caracteres',
      },
    ],
  };

  confirmaAtualizaSenha(template: any): void {
    console.log(this.newPasswordForm.value.senhaAtual);

    var novaSenha = this.newPasswordForm.value.novaSenha;
    var idUsuario = localStorage.getItem('iddousuario');
    this.loginService.atualizaSenha(novaSenha, idUsuario!);
    template.hide();

    this.loginForm.reset();
  }

  public confirmaLogin(template: any): void {
    this.spinner.show();
    this.usuarioApi = Object.assign(this.loginForm.value);
    this.loginService.efetivaLogin(this.usuarioApi, template);
    this.spinner.hide();
  }

  showPassword() {
    this.show = !this.show;
  }
}

interface PerfilAcesso {
  valor: string;
  nomePerfil: string;
}

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(
    control: FormControl | null,
    form: FormGroupDirective | NgForm | null
  ): boolean {
    const invalidCtrl = !!(control?.invalid && control?.parent?.dirty);
    const invalidParent = !!(
      control?.parent?.invalid && control?.parent?.dirty
    );

    return invalidCtrl || invalidParent;
  }
}
