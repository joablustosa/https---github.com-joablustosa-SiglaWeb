import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartidaTripulanteComponent } from './partida-tripulante.component';

describe('PartidaTripulanteComponent', () => {
  let component: PartidaTripulanteComponent;
  let fixture: ComponentFixture<PartidaTripulanteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PartidaTripulanteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PartidaTripulanteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
