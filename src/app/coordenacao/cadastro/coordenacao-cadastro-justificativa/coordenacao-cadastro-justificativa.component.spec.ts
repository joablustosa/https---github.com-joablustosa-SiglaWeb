import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoordenacaoCadastroJustificativaComponent } from './coordenacao-cadastro-justificativa.component';

describe('CoordenacaoCadastroJustificativaComponent', () => {
  let component: CoordenacaoCadastroJustificativaComponent;
  let fixture: ComponentFixture<CoordenacaoCadastroJustificativaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoordenacaoCadastroJustificativaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoordenacaoCadastroJustificativaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
