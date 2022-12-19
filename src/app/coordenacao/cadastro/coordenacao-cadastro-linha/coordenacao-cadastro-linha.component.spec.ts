import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoordenacaoCadastroLinhaComponent } from './coordenacao-cadastro-linha.component';

describe('CoordenacaoCadastroLinhaComponent', () => {
  let component: CoordenacaoCadastroLinhaComponent;
  let fixture: ComponentFixture<CoordenacaoCadastroLinhaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoordenacaoCadastroLinhaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoordenacaoCadastroLinhaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
