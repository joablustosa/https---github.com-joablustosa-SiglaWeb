import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RelatorioEscalaComponent } from './relatorio-escala.component';

describe('RelatorioEscalaComponent', () => {
  let component: RelatorioEscalaComponent;
  let fixture: ComponentFixture<RelatorioEscalaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RelatorioEscalaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RelatorioEscalaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
