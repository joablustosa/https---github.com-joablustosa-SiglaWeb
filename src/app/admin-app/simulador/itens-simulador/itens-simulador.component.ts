import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpRequest, HttpHeaders} from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { BsModalService } from 'ngx-bootstrap/modal';
import { NgxSpinnerService } from 'ngx-spinner';
import { PerguntaService } from 'src/app/sharedServices/appServices/simulador-pergunta.service';
import { SimuladorPergunta } from 'src/app/sharedModels/appModels/simuladorPergunta.model';

@Component({
  selector: 'app-itens-simulador',
  templateUrl: './itens-simulador.component.html',
  styleUrls: ['./itens-simulador.component.css'],
  providers: [PerguntaService]
})
export class ItensSimuladorComponent implements OnInit {
  public pergunta: any;
  public id!: number;
  public nome!: string;
  public perguntas: any;
  registerForm!: FormGroup;
  bodyDeletarEvento: string = ''
  modoSalvar = 'post'

  constructor(
    private http: HttpClient,
    private perguntaService: PerguntaService,
    private activatedRoute: ActivatedRoute,
    private modalService: BsModalService,
    private toastr: ToastrService,
    private fb: FormBuilder,
    private spinner: NgxSpinnerService
  ) { }


  ngOnInit(): void {
    this.validacao();
    this.id = parseInt(this.activatedRoute.snapshot.paramMap.get('id')!)
    this.getPerguntas(this.id);
  }

  public getPerguntas(id: number){
    this.perguntaService.getPergunta(id).subscribe(response => {
      this.perguntas = response;
    })
  }

  openModal(template: any): void {
    this.registerForm.reset();
    template.show(template);
  }

  public confirmeDelete(template: any) {
    this.perguntaService.deletePergunta(this.pergunta.id).subscribe(
      response => {
      this.perguntas = response;
      this.toastr.success('A Pergunta foi excluida');
      template.hide();
      this.getPerguntas(this.id);
    }, error => {
      this.toastr.warning('Não foi possível excluir');
    });
  }

  salvarAlteracao(templatePergunta: any){
    if(this.registerForm.valid){
      if(this.modoSalvar === 'post'){
        this.pergunta = Object.assign({}, this.registerForm.value);
        this.perguntaService.savePergunta(this.pergunta).subscribe(
          () => {
            templatePergunta.hide();
            this.toastr.success('A pergunta foi adicionada');
            this.getPerguntas(this.id);
          },error => {
            this.toastr.warning('Não foi possível salvar');
          }
        );
      }
      else{
        this.pergunta = Object.assign({id: this.pergunta.id}, this.registerForm.value);
        this.perguntaService.savePergunta(this.pergunta).subscribe(
          () => {
            templatePergunta.hide();
            this.toastr.success('O Simulador foi salvo');
            this.getPerguntas(this.id);
          },error => {
            this.toastr.warning('Não foi possível salvar');
          }
        );
      }
    }
  }

  deletePergunta(pergunta: SimuladorPergunta, template: any) {
    this.openModal(template);
    this.pergunta = pergunta;
    this.bodyDeletarEvento = `Tem certeza que deseja excluir o Evento: ${pergunta.titulo}, Código: ${pergunta.descricao}`;
  }

  editarPergunta(pergunta: SimuladorPergunta, template: any){
    this.modoSalvar = 'put'
    this.openModal(template);
    this.pergunta = pergunta;
    this.registerForm.patchValue(pergunta);
  }

  novaPergunta(template: any){
    this.modoSalvar = 'post'
    this.openModal(template);
  }

  validacao(){
    this.registerForm = this.fb.group({
      titulo: ['', Validators.required],
      descricao: ['', Validators.required],
      imagem: ['', Validators.required],
      opcao1: ['', Validators.required],
      opcao2: ['', Validators.required],
      opcao3: ['', Validators.required],
      resposta: ['', Validators.required],
      ponto: ['', Validators.required],
      idNivel: [''],
      status: [''],
      categoria: ['']
    });
  }
}
