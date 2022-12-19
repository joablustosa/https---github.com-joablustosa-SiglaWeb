import { Component, OnInit, TemplateRef } from '@angular/core';
import { HttpClient, HttpRequest, HttpHeaders} from '@angular/common/http';
import { NavigationEnd, Router } from '@angular/router';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from 'ngx-spinner';
import { SimuladorService } from 'src/app/sharedServices/appServices/simulador.service';
import { Simulador } from 'src/app/sharedModels/appModels/simulador.model';

@Component({
  selector: 'app-simulador',
  templateUrl: './simulador.component.html',
  styleUrls: ['./simulador.component.css'],
  providers: [SimuladorService]
})

export class SimuladorComponent implements OnInit {
  simuladors: any;
  simulador: any;
  registerForm!: FormGroup;
  usuarioLogado: string = localStorage.getItem('usuarioSessao')!
  bodyDeletarEvento: string = ''
  modoSalvar = 'post'

  constructor(
    private http: HttpClient,
    private simuladorService: SimuladorService,
    private modalService: BsModalService,
    private toastr: ToastrService,
    private fb: FormBuilder,
    private router: Router,
    private spinner: NgxSpinnerService
  ) { }

  ngOnInit(): void {
    this.getSimuladors();
    this.validacao();
  }

  openModal(template: any): void {
    this.registerForm.reset();
    template.show(template);
  }

  public getSimuladors(){
    this.simuladorService.getSimulador().subscribe(response => {
      this.simuladors = response;
    })
  }

  deleteSimulador(simulador: Simulador, template: any) {
    this.openModal(template);
    this.simulador = simulador;
    this.bodyDeletarEvento = `Tem certeza que deseja excluir o Evento: ${simulador.nome}, Código: ${simulador.id}`;
  }

  public confirmeDelete(template: any) {
    this.simuladorService.deleteSimulador(this.simulador.id).subscribe(
      response => {
      this.simuladors = response;
      this.toastr.success('O Simulador foi excluido');
      template.hide();
      this.getSimuladors();
    }, error => {
      this.toastr.warning('Não foi possível excluir');
    });
  }

  public getSimuladorsById(id: number){
    this.simuladorService.getSimuladorsById(id).subscribe(response => {
      this.simulador = response;
    })
  }


  editarSimulador(simulador: Simulador, simuladorTemplate: any){
    this.modoSalvar = 'put'
    this.openModal(simuladorTemplate);
    this.simulador = simulador;
    this.registerForm.patchValue(simulador);
  }

  novoSimulador(simuladorTemplate: any){
    this.modoSalvar = 'post'
    this.openModal(simuladorTemplate);
  }

  salvarAlteracao(simuladorTemplate: any){
    if(this.registerForm.valid){
      if(this.modoSalvar === 'post'){
        this.simulador = Object.assign({}, this.registerForm.value);
        this.simuladorService.saveSimulador(this.simulador).subscribe(
          () => {
            simuladorTemplate.hide();
            this.toastr.success('O Simulador foi salvo');
            this.getSimuladors();
          },error => {
            this.toastr.warning('Não foi possível salvar');
          }
        );
      }
      else{
        this.simulador = Object.assign({id: this.simulador.id}, this.registerForm.value);
        this.simuladorService.putSimulador(this.simulador).subscribe(
          () => {
            simuladorTemplate.hide();
            this.toastr.success('O Simulador foi salvo');
            this.getSimuladors();
          },error => {
            this.toastr.warning('Não foi possível salvar');
          }
        );
      }
    }
  }

  validacao(){
    this.registerForm = this.fb.group({
      nome: ['', [Validators.required, Validators.minLength(5)]],
      tipo: ['', Validators.required],
      status: ['', Validators.required],
      responsavel: ['', Validators.required],
      dataCriacao: ['', Validators.required]
    });
  }

  public getPerguntas(simulador: any){
    this.router.navigate(['simulador',simulador.id]);
  }

}
