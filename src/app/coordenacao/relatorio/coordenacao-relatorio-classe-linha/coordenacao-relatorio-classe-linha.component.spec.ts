import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoordenacaoRelatorioClasseLinhaComponent } from './coordenacao-relatorio-classe-linha.component';

describe('CoordenacaoRelatorioClasseLinhaComponent', () => {
  let component: CoordenacaoRelatorioClasseLinhaComponent;
  let fixture: ComponentFixture<CoordenacaoRelatorioClasseLinhaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoordenacaoRelatorioClasseLinhaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoordenacaoRelatorioClasseLinhaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
