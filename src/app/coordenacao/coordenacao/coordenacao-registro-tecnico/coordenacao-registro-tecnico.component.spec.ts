import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoordenacaoRegistroTecnicoComponent } from './coordenacao-registro-tecnico.component';

describe('CoordenacaoRegistroTecnicoComponent', () => {
  let component: CoordenacaoRegistroTecnicoComponent;
  let fixture: ComponentFixture<CoordenacaoRegistroTecnicoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoordenacaoRegistroTecnicoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoordenacaoRegistroTecnicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
