import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoordenacaoRelatorioTempoParadaComponent } from './coordenacao-relatorio-tempo-parada.component';

describe('CoordenacaoRelatorioTempoParadaComponent', () => {
  let component: CoordenacaoRelatorioTempoParadaComponent;
  let fixture: ComponentFixture<CoordenacaoRelatorioTempoParadaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoordenacaoRelatorioTempoParadaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoordenacaoRelatorioTempoParadaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
