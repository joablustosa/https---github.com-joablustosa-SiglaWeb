import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TempoApresentacaoComponent } from './tempo-apresentacao.component';

describe('TempoApresentacaoComponent', () => {
  let component: TempoApresentacaoComponent;
  let fixture: ComponentFixture<TempoApresentacaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TempoApresentacaoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TempoApresentacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
