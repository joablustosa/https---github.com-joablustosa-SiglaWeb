import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoordenacaoCadastroCidadeComponent } from './coordenacao-cadastro-cidade.component';

describe('CoordenacaoCadastroCidadeComponent', () => {
  let component: CoordenacaoCadastroCidadeComponent;
  let fixture: ComponentFixture<CoordenacaoCadastroCidadeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoordenacaoCadastroCidadeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoordenacaoCadastroCidadeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
