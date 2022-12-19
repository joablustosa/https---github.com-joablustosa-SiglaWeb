import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestricaoHorarioComponent } from './restricao-horario.component';

describe('RestricaoHorarioComponent', () => {
  let component: RestricaoHorarioComponent;
  let fixture: ComponentFixture<RestricaoHorarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RestricaoHorarioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RestricaoHorarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
