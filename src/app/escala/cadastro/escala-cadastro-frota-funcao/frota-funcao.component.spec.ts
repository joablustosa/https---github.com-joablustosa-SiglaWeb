import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrotaFuncaoComponent } from './frota-funcao.component';

describe('FrotaFuncaoComponent', () => {
  let component: FrotaFuncaoComponent;
  let fixture: ComponentFixture<FrotaFuncaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FrotaFuncaoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FrotaFuncaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
