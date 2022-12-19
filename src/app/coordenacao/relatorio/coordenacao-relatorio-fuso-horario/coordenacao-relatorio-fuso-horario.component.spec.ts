import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoordenacaoRelatorioFusoHorarioComponent } from './coordenacao-relatorio-fuso-horario.component';

describe('CoordenacaoRelatorioFusoHorarioComponent', () => {
  let component: CoordenacaoRelatorioFusoHorarioComponent;
  let fixture: ComponentFixture<CoordenacaoRelatorioFusoHorarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoordenacaoRelatorioFusoHorarioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoordenacaoRelatorioFusoHorarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
