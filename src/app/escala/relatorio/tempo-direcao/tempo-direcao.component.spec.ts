import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TempoDirecaoComponent } from './tempo-direcao.component';

describe('TempoDirecaoComponent', () => {
  let component: TempoDirecaoComponent;
  let fixture: ComponentFixture<TempoDirecaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TempoDirecaoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TempoDirecaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
