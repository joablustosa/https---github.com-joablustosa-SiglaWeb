import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParametroEmpresaComponent } from './parametro-empresa.component';

describe('ParametroEmpresaComponent', () => {
  let component: ParametroEmpresaComponent;
  let fixture: ComponentFixture<ParametroEmpresaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParametroEmpresaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ParametroEmpresaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
