import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnomaliaInterjornadaComponent } from './anomalia-interjornada.component';

describe('AnomaliaInterjornadaComponent', () => {
  let component: AnomaliaInterjornadaComponent;
  let fixture: ComponentFixture<AnomaliaInterjornadaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnomaliaInterjornadaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnomaliaInterjornadaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
