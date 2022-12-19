import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoordenacaoRelatorioJustificativaInternaComponent } from './coordenacao-relatorio-justificativa-interna.component';

describe('CoordenacaoRelatorioJustificativaInternaComponent', () => {
  let component: CoordenacaoRelatorioJustificativaInternaComponent;
  let fixture: ComponentFixture<CoordenacaoRelatorioJustificativaInternaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoordenacaoRelatorioJustificativaInternaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoordenacaoRelatorioJustificativaInternaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
