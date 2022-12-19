import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoordenacaoCadastroPaisComponent } from './coordenacao-cadastro-pais.component';

describe('CoordenacaoCadastroPaisComponent', () => {
  let component: CoordenacaoCadastroPaisComponent;
  let fixture: ComponentFixture<CoordenacaoCadastroPaisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoordenacaoCadastroPaisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoordenacaoCadastroPaisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
