import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FuncaoBordoComponent } from './funcao-bordo.component';

describe('FuncaoBordoComponent', () => {
  let component: FuncaoBordoComponent;
  let fixture: ComponentFixture<FuncaoBordoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FuncaoBordoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FuncaoBordoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
