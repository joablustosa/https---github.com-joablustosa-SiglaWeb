import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoordenacaoCoordenacaoViagemComponent } from './coordenacao-coordenacao-viagem.component';

describe('CoordenacaoCoordenacaoViagemComponent', () => {
  let component: CoordenacaoCoordenacaoViagemComponent;
  let fixture: ComponentFixture<CoordenacaoCoordenacaoViagemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoordenacaoCoordenacaoViagemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoordenacaoCoordenacaoViagemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
