import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EscalaCadastroDadoGeralTripulanteComponent } from './escala-cadastro-dado-geral-tripulante.component';

describe('EscalaCadastroDadoGeralTripulanteComponent', () => {
  let component: EscalaCadastroDadoGeralTripulanteComponent;
  let fixture: ComponentFixture<EscalaCadastroDadoGeralTripulanteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EscalaCadastroDadoGeralTripulanteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EscalaCadastroDadoGeralTripulanteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
