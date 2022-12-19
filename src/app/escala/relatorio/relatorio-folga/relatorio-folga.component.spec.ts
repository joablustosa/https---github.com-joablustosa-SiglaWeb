import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RelatorioFolgaComponent } from './relatorio-folga.component';

describe('RelatorioFolgaComponent', () => {
  let component: RelatorioFolgaComponent;
  let fixture: ComponentFixture<RelatorioFolgaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RelatorioFolgaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RelatorioFolgaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
