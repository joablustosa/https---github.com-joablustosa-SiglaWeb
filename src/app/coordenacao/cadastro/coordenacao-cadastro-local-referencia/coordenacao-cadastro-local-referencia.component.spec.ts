import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoordenacaoCadastroLocalReferenciaComponent } from './coordenacao-cadastro-local-referencia.component';

describe('CoordenacaoCadastroLocalReferenciaComponent', () => {
  let component: CoordenacaoCadastroLocalReferenciaComponent;
  let fixture: ComponentFixture<CoordenacaoCadastroLocalReferenciaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoordenacaoCadastroLocalReferenciaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoordenacaoCadastroLocalReferenciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
