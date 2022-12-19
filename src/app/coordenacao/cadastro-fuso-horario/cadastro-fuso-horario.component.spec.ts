import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroFusoHorarioComponent } from './cadastro-fuso-horario.component';

describe('CadastroFusoHorarioComponent', () => {
  let component: CadastroFusoHorarioComponent;
  let fixture: ComponentFixture<CadastroFusoHorarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadastroFusoHorarioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastroFusoHorarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
