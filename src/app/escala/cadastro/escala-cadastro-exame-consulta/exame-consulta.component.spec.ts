import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExameConsultaComponent } from './exame-consulta.component';

describe('ExameConsultaComponent', () => {
  let component: ExameConsultaComponent;
  let fixture: ComponentFixture<ExameConsultaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExameConsultaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExameConsultaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
