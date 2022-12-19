import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoordenacaoRelatorioDistanciaComponent } from './coordenacao-relatorio-distancia.component';

describe('CoordenacaoRelatorioDistanciaComponent', () => {
  let component: CoordenacaoRelatorioDistanciaComponent;
  let fixture: ComponentFixture<CoordenacaoRelatorioDistanciaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoordenacaoRelatorioDistanciaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoordenacaoRelatorioDistanciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
