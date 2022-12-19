import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoordenacaoCadastroGrupoLinhaComponent } from './coordenacao-cadastro-grupo-linha.component';

describe('CoordenacaoCadastroGrupoLinhaComponent', () => {
  let component: CoordenacaoCadastroGrupoLinhaComponent;
  let fixture: ComponentFixture<CoordenacaoCadastroGrupoLinhaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoordenacaoCadastroGrupoLinhaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoordenacaoCadastroGrupoLinhaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
