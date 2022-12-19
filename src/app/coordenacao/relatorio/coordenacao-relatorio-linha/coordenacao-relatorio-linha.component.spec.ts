import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoordenacaoRelatorioLinhaComponent } from './coordenacao-relatorio-linha.component';

describe('CoordenacaoRelatorioLinhaComponent', () => {
  let component: CoordenacaoRelatorioLinhaComponent;
  let fixture: ComponentFixture<CoordenacaoRelatorioLinhaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoordenacaoRelatorioLinhaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoordenacaoRelatorioLinhaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
