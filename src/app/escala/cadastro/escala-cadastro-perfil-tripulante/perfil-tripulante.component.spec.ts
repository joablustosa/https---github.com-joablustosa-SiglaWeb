import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfilTripulanteComponent } from './perfil-tripulante.component';

describe('PerfilTripulanteComponent', () => {
  let component: PerfilTripulanteComponent;
  let fixture: ComponentFixture<PerfilTripulanteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PerfilTripulanteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PerfilTripulanteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
