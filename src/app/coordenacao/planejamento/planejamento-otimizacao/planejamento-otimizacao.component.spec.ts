import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanejamentoOtimizacaoComponent } from './planejamento-otimizacao.component';

describe('PlanejamentoOtimizacaoComponent', () => {
  let component: PlanejamentoOtimizacaoComponent;
  let fixture: ComponentFixture<PlanejamentoOtimizacaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlanejamentoOtimizacaoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanejamentoOtimizacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
