import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValeRefeicaoComponent } from './vale-refeicao.component';

describe('ValeRefeicaoComponent', () => {
  let component: ValeRefeicaoComponent;
  let fixture: ComponentFixture<ValeRefeicaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ValeRefeicaoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ValeRefeicaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
