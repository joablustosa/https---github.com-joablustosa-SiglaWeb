import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TotalizadorViagemComponent } from './totalizador-viagem.component';

describe('TotalizadorViagemComponent', () => {
  let component: TotalizadorViagemComponent;
  let fixture: ComponentFixture<TotalizadorViagemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TotalizadorViagemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TotalizadorViagemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
