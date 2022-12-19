import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SessaoLinhaComponent } from './sessao-linha.component';

describe('SessaoLinhaComponent', () => {
  let component: SessaoLinhaComponent;
  let fixture: ComponentFixture<SessaoLinhaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SessaoLinhaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SessaoLinhaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
