import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanejamentoFechamentoPeriodoComponent } from './planejamento-fechamento-periodo.component';

describe('PlanejamentoFechamentoPeriodoComponent', () => {
  let component: PlanejamentoFechamentoPeriodoComponent;
  let fixture: ComponentFixture<PlanejamentoFechamentoPeriodoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlanejamentoFechamentoPeriodoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanejamentoFechamentoPeriodoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
