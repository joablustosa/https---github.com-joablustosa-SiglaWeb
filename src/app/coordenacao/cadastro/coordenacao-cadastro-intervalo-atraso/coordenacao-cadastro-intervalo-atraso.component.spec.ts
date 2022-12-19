import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoordenacaoCadastroIntervaloAtrasoComponent } from './coordenacao-cadastro-intervalo-atraso.component';

describe('CoordenacaoCadastroIntervaloAtrasoComponent', () => {
  let component: CoordenacaoCadastroIntervaloAtrasoComponent;
  let fixture: ComponentFixture<CoordenacaoCadastroIntervaloAtrasoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoordenacaoCadastroIntervaloAtrasoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoordenacaoCadastroIntervaloAtrasoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
