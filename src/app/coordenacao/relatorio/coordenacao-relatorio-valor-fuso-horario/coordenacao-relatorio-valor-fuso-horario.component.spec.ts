import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoordenacaoRelatorioValorFusoHorarioComponent } from './coordenacao-relatorio-valor-fuso-horario.component';

describe('CoordenacaoRelatorioValorFusoHorarioComponent', () => {
  let component: CoordenacaoRelatorioValorFusoHorarioComponent;
  let fixture: ComponentFixture<CoordenacaoRelatorioValorFusoHorarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoordenacaoRelatorioValorFusoHorarioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoordenacaoRelatorioValorFusoHorarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
