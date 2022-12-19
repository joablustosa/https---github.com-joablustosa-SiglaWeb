import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoExameComponent } from './tipo-exame.component';

describe('TipoExameComponent', () => {
  let component: TipoExameComponent;
  let fixture: ComponentFixture<TipoExameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TipoExameComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TipoExameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
