import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoordenacaoConsultaOcupacaoComponent } from './coordenacao-consulta-ocupacao.component';

describe('CoordenacaoConsultaOcupacaoComponent', () => {
  let component: CoordenacaoConsultaOcupacaoComponent;
  let fixture: ComponentFixture<CoordenacaoConsultaOcupacaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoordenacaoConsultaOcupacaoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoordenacaoConsultaOcupacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
