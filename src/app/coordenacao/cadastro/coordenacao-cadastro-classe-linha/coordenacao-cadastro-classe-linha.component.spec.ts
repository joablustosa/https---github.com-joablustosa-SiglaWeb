import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoordenacaoCadastroClasseLinhaComponent } from './coordenacao-cadastro-classe-linha.component';

describe('CoordenacaoCadastroClasseLinhaComponent', () => {
  let component: CoordenacaoCadastroClasseLinhaComponent;
  let fixture: ComponentFixture<CoordenacaoCadastroClasseLinhaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoordenacaoCadastroClasseLinhaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoordenacaoCadastroClasseLinhaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
