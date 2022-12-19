import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HabilitacaoHorarioComponent } from './habilitacao-horario.component';

describe('HabilitacaoHorarioComponent', () => {
  let component: HabilitacaoHorarioComponent;
  let fixture: ComponentFixture<HabilitacaoHorarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HabilitacaoHorarioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HabilitacaoHorarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
