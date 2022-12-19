import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RefeicaoViagemComponent } from './refeicao-viagem.component';

describe('RefeicaoViagemComponent', () => {
  let component: RefeicaoViagemComponent;
  let fixture: ComponentFixture<RefeicaoViagemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RefeicaoViagemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RefeicaoViagemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
