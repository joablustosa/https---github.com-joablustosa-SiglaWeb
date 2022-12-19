import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoordenacaoCadastroNucleoOperacionalComponent } from './coordenacao-cadastro-nucleo-operacional.component';

describe('CoordenacaoCadastroNucleoOperacionalComponent', () => {
  let component: CoordenacaoCadastroNucleoOperacionalComponent;
  let fixture: ComponentFixture<CoordenacaoCadastroNucleoOperacionalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoordenacaoCadastroNucleoOperacionalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoordenacaoCadastroNucleoOperacionalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
