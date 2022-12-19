import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoordenacaoRelatorioFrotaComponent } from './coordenacao-relatorio-frota.component';

describe('CoordenacaoRelatorioFrotaComponent', () => {
  let component: CoordenacaoRelatorioFrotaComponent;
  let fixture: ComponentFixture<CoordenacaoRelatorioFrotaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoordenacaoRelatorioFrotaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoordenacaoRelatorioFrotaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
