import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoordenacaoRelatorioNucleoOperacionalComponent } from './coordenacao-relatorio-nucleo-operacional.component';

describe('CoordenacaoRelatorioNucleoOperacionalComponent', () => {
  let component: CoordenacaoRelatorioNucleoOperacionalComponent;
  let fixture: ComponentFixture<CoordenacaoRelatorioNucleoOperacionalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoordenacaoRelatorioNucleoOperacionalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoordenacaoRelatorioNucleoOperacionalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
