import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoordenacaoRelatorioIntervaloAtrasoComponent } from './coordenacao-relatorio-intervalo-atraso.component';

describe('CoordenacaoRelatorioIntervaloAtrasoComponent', () => {
  let component: CoordenacaoRelatorioIntervaloAtrasoComponent;
  let fixture: ComponentFixture<CoordenacaoRelatorioIntervaloAtrasoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoordenacaoRelatorioIntervaloAtrasoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoordenacaoRelatorioIntervaloAtrasoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
