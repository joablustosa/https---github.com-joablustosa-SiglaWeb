import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanejamentoAtualizacaoTrilhoExecucaoComponent } from './planejamento-atualizacao-trilho-execucao.component';

describe('PlanejamentoAtualizacaoTrilhoExecucaoComponent', () => {
  let component: PlanejamentoAtualizacaoTrilhoExecucaoComponent;
  let fixture: ComponentFixture<PlanejamentoAtualizacaoTrilhoExecucaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlanejamentoAtualizacaoTrilhoExecucaoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanejamentoAtualizacaoTrilhoExecucaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
