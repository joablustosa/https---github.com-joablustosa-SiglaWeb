import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FolhaoDiarioComponent } from './folhao-diario.component';

describe('FolhaoDiarioComponent', () => {
  let component: FolhaoDiarioComponent;
  let fixture: ComponentFixture<FolhaoDiarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FolhaoDiarioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FolhaoDiarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
