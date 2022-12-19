import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoordenacaoCadastroValorPedagioComponent } from './coordenacao-cadastro-valor-pedagio.component';

describe('CoordenacaoCadastroValorPedagioComponent', () => {
  let component: CoordenacaoCadastroValorPedagioComponent;
  let fixture: ComponentFixture<CoordenacaoCadastroValorPedagioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoordenacaoCadastroValorPedagioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoordenacaoCadastroValorPedagioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
