import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoordenacaoCadastroRegialMetropolitanaComponent } from './coordenacao-cadastro-regial-metropolitana.component';

describe('CoordenacaoCadastroRegialMetropolitanaComponent', () => {
  let component: CoordenacaoCadastroRegialMetropolitanaComponent;
  let fixture: ComponentFixture<CoordenacaoCadastroRegialMetropolitanaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoordenacaoCadastroRegialMetropolitanaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoordenacaoCadastroRegialMetropolitanaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
