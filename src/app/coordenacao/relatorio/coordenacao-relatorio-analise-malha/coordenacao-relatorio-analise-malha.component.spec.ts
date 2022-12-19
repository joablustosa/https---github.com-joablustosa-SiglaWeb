import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoordenacaoRelatorioAnaliseMalhaComponent } from './coordenacao-relatorio-analise-malha.component';

describe('CoordenacaoRelatorioAnaliseMalhaComponent', () => {
  let component: CoordenacaoRelatorioAnaliseMalhaComponent;
  let fixture: ComponentFixture<CoordenacaoRelatorioAnaliseMalhaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoordenacaoRelatorioAnaliseMalhaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoordenacaoRelatorioAnaliseMalhaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
