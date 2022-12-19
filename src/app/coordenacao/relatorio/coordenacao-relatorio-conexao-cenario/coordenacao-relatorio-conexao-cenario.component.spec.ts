import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoordenacaoRelatorioConexaoCenarioComponent } from './coordenacao-relatorio-conexao-cenario.component';

describe('CoordenacaoRelatorioConexaoCenarioComponent', () => {
  let component: CoordenacaoRelatorioConexaoCenarioComponent;
  let fixture: ComponentFixture<CoordenacaoRelatorioConexaoCenarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoordenacaoRelatorioConexaoCenarioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoordenacaoRelatorioConexaoCenarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
