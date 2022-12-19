import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoordenacaoCadastroFrotaComponent } from './coordenacao-cadastro-frota.component';

describe('CoordenacaoCadastroFrotaComponent', () => {
  let component: CoordenacaoCadastroFrotaComponent;
  let fixture: ComponentFixture<CoordenacaoCadastroFrotaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoordenacaoCadastroFrotaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoordenacaoCadastroFrotaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
