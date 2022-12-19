import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CargoPorFrotaComponent } from './cargo-por-frota.component';

describe('CargoPorFrotaComponent', () => {
  let component: CargoPorFrotaComponent;
  let fixture: ComponentFixture<CargoPorFrotaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CargoPorFrotaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CargoPorFrotaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
