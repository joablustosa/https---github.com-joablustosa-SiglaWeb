import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoordenacaoIntegracaoVeltecComponent } from './coordenacao-integracao-veltec.component';

describe('CoordenacaoIntegracaoVeltecComponent', () => {
  let component: CoordenacaoIntegracaoVeltecComponent;
  let fixture: ComponentFixture<CoordenacaoIntegracaoVeltecComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoordenacaoIntegracaoVeltecComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoordenacaoIntegracaoVeltecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
