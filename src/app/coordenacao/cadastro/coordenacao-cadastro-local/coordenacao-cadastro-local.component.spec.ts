import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoordenacaoCadastroLocalComponent } from './coordenacao-cadastro-local.component';

describe('CoordenacaoCadastroLocalComponent', () => {
  let component: CoordenacaoCadastroLocalComponent;
  let fixture: ComponentFixture<CoordenacaoCadastroLocalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoordenacaoCadastroLocalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoordenacaoCadastroLocalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
