import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoordenacaoRelatorioLocalReferenciaComponent } from './coordenacao-relatorio-local-referencia.component';

describe('CoordenacaoRelatorioLocalReferenciaComponent', () => {
  let component: CoordenacaoRelatorioLocalReferenciaComponent;
  let fixture: ComponentFixture<CoordenacaoRelatorioLocalReferenciaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoordenacaoRelatorioLocalReferenciaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoordenacaoRelatorioLocalReferenciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
