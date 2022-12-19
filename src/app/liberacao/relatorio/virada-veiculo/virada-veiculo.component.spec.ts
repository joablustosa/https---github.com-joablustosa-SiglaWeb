import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViradaVeiculoComponent } from './virada-veiculo.component';

describe('ViradaVeiculoComponent', () => {
  let component: ViradaVeiculoComponent;
  let fixture: ComponentFixture<ViradaVeiculoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViradaVeiculoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViradaVeiculoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
