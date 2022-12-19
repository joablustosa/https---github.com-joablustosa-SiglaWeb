import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoordenacaoRelatorioRegionalComponent } from './coordenacao-relatorio-regional.component';

describe('CoordenacaoRelatorioRegionalComponent', () => {
  let component: CoordenacaoRelatorioRegionalComponent;
  let fixture: ComponentFixture<CoordenacaoRelatorioRegionalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoordenacaoRelatorioRegionalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoordenacaoRelatorioRegionalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
