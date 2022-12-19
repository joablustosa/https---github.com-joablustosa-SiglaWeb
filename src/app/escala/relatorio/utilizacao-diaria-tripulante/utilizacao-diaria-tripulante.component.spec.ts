import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UtilizacaoDiariaTripulanteComponent } from './utilizacao-diaria-tripulante.component';

describe('UtilizacaoDiariaTripulanteComponent', () => {
  let component: UtilizacaoDiariaTripulanteComponent;
  let fixture: ComponentFixture<UtilizacaoDiariaTripulanteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UtilizacaoDiariaTripulanteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UtilizacaoDiariaTripulanteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
