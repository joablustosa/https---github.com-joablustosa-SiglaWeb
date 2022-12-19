import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoordenacaoCadastroValorFusoHorarioComponent } from './coordenacao-cadastro-valor-fuso-horario.component';

describe('CoordenacaoCadastroValorFusoHorarioComponent', () => {
  let component: CoordenacaoCadastroValorFusoHorarioComponent;
  let fixture: ComponentFixture<CoordenacaoCadastroValorFusoHorarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoordenacaoCadastroValorFusoHorarioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoordenacaoCadastroValorFusoHorarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
