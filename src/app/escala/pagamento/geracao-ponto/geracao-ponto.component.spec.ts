import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeracaoPontoComponent } from './geracao-ponto.component';

describe('GeracaoPontoComponent', () => {
  let component: GeracaoPontoComponent;
  let fixture: ComponentFixture<GeracaoPontoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GeracaoPontoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GeracaoPontoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
