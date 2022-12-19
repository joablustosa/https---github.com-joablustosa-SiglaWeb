import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoordenacaoFechamentoPeriodoComponent } from './coordenacao-fechamento-periodo.component';

describe('CoordenacaoFechamentoPeriodoComponent', () => {
  let component: CoordenacaoFechamentoPeriodoComponent;
  let fixture: ComponentFixture<CoordenacaoFechamentoPeriodoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoordenacaoFechamentoPeriodoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoordenacaoFechamentoPeriodoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
