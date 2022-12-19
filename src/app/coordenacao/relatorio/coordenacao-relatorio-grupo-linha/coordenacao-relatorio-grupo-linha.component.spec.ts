import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoordenacaoRelatorioGrupoLinhaComponent } from './coordenacao-relatorio-grupo-linha.component';

describe('CoordenacaoRelatorioGrupoLinhaComponent', () => {
  let component: CoordenacaoRelatorioGrupoLinhaComponent;
  let fixture: ComponentFixture<CoordenacaoRelatorioGrupoLinhaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoordenacaoRelatorioGrupoLinhaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoordenacaoRelatorioGrupoLinhaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
