import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PernoiteComponent } from './pernoite.component';

describe('PernoiteComponent', () => {
  let component: PernoiteComponent;
  let fixture: ComponentFixture<PernoiteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PernoiteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PernoiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
