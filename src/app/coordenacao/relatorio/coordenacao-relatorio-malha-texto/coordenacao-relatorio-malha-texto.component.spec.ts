import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoordenacaoRelatorioMalhaTextoComponent } from './coordenacao-relatorio-malha-texto.component';

describe('CoordenacaoRelatorioMalhaTextoComponent', () => {
  let component: CoordenacaoRelatorioMalhaTextoComponent;
  let fixture: ComponentFixture<CoordenacaoRelatorioMalhaTextoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoordenacaoRelatorioMalhaTextoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoordenacaoRelatorioMalhaTextoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
