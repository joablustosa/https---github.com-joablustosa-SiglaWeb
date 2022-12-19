import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoordenacaoCadastroGrupoLocalComponent } from './coordenacao-cadastro-grupo-local.component';

describe('CoordenacaoCadastroGrupoLocalComponent', () => {
  let component: CoordenacaoCadastroGrupoLocalComponent;
  let fixture: ComponentFixture<CoordenacaoCadastroGrupoLocalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoordenacaoCadastroGrupoLocalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoordenacaoCadastroGrupoLocalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
