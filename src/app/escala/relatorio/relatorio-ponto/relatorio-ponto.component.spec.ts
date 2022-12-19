import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RelatorioPontoComponent } from './relatorio-ponto.component';

describe('RelatorioPontoComponent', () => {
  let component: RelatorioPontoComponent;
  let fixture: ComponentFixture<RelatorioPontoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RelatorioPontoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RelatorioPontoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
