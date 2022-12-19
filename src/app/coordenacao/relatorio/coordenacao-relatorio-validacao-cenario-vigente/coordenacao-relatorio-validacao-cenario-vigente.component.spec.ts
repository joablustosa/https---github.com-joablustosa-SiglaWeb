import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoordenacaoRelatorioValidacaoCenarioVigenteComponent } from './coordenacao-relatorio-validacao-cenario-vigente.component';

describe('CoordenacaoRelatorioValidacaoCenarioVigenteComponent', () => {
  let component: CoordenacaoRelatorioValidacaoCenarioVigenteComponent;
  let fixture: ComponentFixture<CoordenacaoRelatorioValidacaoCenarioVigenteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoordenacaoRelatorioValidacaoCenarioVigenteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoordenacaoRelatorioValidacaoCenarioVigenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
