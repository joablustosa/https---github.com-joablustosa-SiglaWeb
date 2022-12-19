import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoordenacaoRelatorioCidadeComponent } from './coordenacao-relatorio-cidade.component';

describe('CoordenacaoRelatorioCidadeComponent', () => {
  let component: CoordenacaoRelatorioCidadeComponent;
  let fixture: ComponentFixture<CoordenacaoRelatorioCidadeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoordenacaoRelatorioCidadeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoordenacaoRelatorioCidadeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
