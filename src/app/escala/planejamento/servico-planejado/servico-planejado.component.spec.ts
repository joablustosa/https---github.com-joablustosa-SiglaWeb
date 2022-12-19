import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicoPlanejadoComponent } from './servico-planejado.component';

describe('ServicoPlanejadoComponent', () => {
  let component: ServicoPlanejadoComponent;
  let fixture: ComponentFixture<ServicoPlanejadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServicoPlanejadoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicoPlanejadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
