import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoordenacaoRelatorioConexaoServicoComponent } from './coordenacao-relatorio-conexao-servico.component';

describe('CoordenacaoRelatorioConexaoServicoComponent', () => {
  let component: CoordenacaoRelatorioConexaoServicoComponent;
  let fixture: ComponentFixture<CoordenacaoRelatorioConexaoServicoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoordenacaoRelatorioConexaoServicoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoordenacaoRelatorioConexaoServicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
