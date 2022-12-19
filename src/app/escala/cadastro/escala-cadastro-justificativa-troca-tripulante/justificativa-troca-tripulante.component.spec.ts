import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JustificativaTrocaTripulanteComponent } from './justificativa-troca-tripulante.component';

describe('JustificativaTrocaTripulanteComponent', () => {
  let component: JustificativaTrocaTripulanteComponent;
  let fixture: ComponentFixture<JustificativaTrocaTripulanteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JustificativaTrocaTripulanteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JustificativaTrocaTripulanteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
