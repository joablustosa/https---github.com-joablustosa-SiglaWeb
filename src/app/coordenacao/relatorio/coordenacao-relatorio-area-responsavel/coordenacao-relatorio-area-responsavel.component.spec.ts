import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoordenacaoRelatorioAreaResponsavelComponent } from './coordenacao-relatorio-area-responsavel.component';

describe('CoordenacaoRelatorioAreaResponsavelComponent', () => {
  let component: CoordenacaoRelatorioAreaResponsavelComponent;
  let fixture: ComponentFixture<CoordenacaoRelatorioAreaResponsavelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoordenacaoRelatorioAreaResponsavelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoordenacaoRelatorioAreaResponsavelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
