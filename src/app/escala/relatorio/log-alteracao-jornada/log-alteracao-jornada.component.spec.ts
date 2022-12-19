import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogAlteracaoJornadaComponent } from './log-alteracao-jornada.component';

describe('LogAlteracaoJornadaComponent', () => {
  let component: LogAlteracaoJornadaComponent;
  let fixture: ComponentFixture<LogAlteracaoJornadaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogAlteracaoJornadaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LogAlteracaoJornadaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
