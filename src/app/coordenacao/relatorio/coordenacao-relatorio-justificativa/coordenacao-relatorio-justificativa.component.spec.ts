import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoordenacaoRelatorioJustificativaComponent } from './coordenacao-relatorio-justificativa.component';

describe('CoordenacaoRelatorioJustificativaComponent', () => {
  let component: CoordenacaoRelatorioJustificativaComponent;
  let fixture: ComponentFixture<CoordenacaoRelatorioJustificativaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoordenacaoRelatorioJustificativaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoordenacaoRelatorioJustificativaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
