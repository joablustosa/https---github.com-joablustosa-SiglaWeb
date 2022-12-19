import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoordenacaoCadastroDistanciaComponent } from './coordenacao-cadastro-distancia.component';

describe('CoordenacaoCadastroDistanciaComponent', () => {
  let component: CoordenacaoCadastroDistanciaComponent;
  let fixture: ComponentFixture<CoordenacaoCadastroDistanciaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoordenacaoCadastroDistanciaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoordenacaoCadastroDistanciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
