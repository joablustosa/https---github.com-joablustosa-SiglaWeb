import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DespesaTripulanteComponent } from './despesa-tripulante.component';

describe('DespesaTripulanteComponent', () => {
  let component: DespesaTripulanteComponent;
  let fixture: ComponentFixture<DespesaTripulanteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DespesaTripulanteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DespesaTripulanteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
