import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RelogioPontoComponent } from './relogio-ponto.component';

describe('RelogioPontoComponent', () => {
  let component: RelogioPontoComponent;
  let fixture: ComponentFixture<RelogioPontoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RelogioPontoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RelogioPontoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
