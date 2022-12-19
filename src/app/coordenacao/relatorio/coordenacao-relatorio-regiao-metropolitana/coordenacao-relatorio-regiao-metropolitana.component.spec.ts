import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoordenacaoRelatorioRegiaoMetropolitanaComponent } from './coordenacao-relatorio-regiao-metropolitana.component';

describe('CoordenacaoRelatorioRegiaoMetropolitanaComponent', () => {
  let component: CoordenacaoRelatorioRegiaoMetropolitanaComponent;
  let fixture: ComponentFixture<CoordenacaoRelatorioRegiaoMetropolitanaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoordenacaoRelatorioRegiaoMetropolitanaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoordenacaoRelatorioRegiaoMetropolitanaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
