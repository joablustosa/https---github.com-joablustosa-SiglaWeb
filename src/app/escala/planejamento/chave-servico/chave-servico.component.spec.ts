import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChaveServicoComponent } from './chave-servico.component';

describe('ChaveServicoComponent', () => {
  let component: ChaveServicoComponent;
  let fixture: ComponentFixture<ChaveServicoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChaveServicoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChaveServicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
