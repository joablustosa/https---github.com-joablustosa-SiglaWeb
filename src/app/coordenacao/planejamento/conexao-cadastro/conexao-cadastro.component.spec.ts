import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConexaoCadastroComponent } from './conexao-cadastro.component';

describe('ConexaoCadastroComponent', () => {
  let component: ConexaoCadastroComponent;
  let fixture: ComponentFixture<ConexaoCadastroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConexaoCadastroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConexaoCadastroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
