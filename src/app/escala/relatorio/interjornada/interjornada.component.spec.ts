import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterjornadaComponent } from './interjornada.component';

describe('InterjornadaComponent', () => {
  let component: InterjornadaComponent;
  let fixture: ComponentFixture<InterjornadaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InterjornadaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InterjornadaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
