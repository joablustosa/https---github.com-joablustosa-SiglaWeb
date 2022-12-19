import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoordenacaoCadastroTempoParadaComponent } from './coordenacao-cadastro-tempo-parada.component';

describe('CoordenacaoCadastroTempoParadaComponent', () => {
  let component: CoordenacaoCadastroTempoParadaComponent;
  let fixture: ComponentFixture<CoordenacaoCadastroTempoParadaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoordenacaoCadastroTempoParadaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoordenacaoCadastroTempoParadaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
