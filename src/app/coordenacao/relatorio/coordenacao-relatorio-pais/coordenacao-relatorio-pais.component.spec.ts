import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoordenacaoRelatorioPaisComponent } from './coordenacao-relatorio-pais.component';

describe('CoordenacaoRelatorioPaisComponent', () => {
  let component: CoordenacaoRelatorioPaisComponent;
  let fixture: ComponentFixture<CoordenacaoRelatorioPaisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoordenacaoRelatorioPaisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoordenacaoRelatorioPaisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
