import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JustificativaInterjornadaComponent } from './justificativa-interjornada.component';

describe('JustificativaInterjornadaComponent', () => {
  let component: JustificativaInterjornadaComponent;
  let fixture: ComponentFixture<JustificativaInterjornadaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JustificativaInterjornadaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JustificativaInterjornadaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
