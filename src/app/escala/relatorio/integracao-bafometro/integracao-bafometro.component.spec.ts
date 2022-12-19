import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntegracaoBafometroComponent } from './integracao-bafometro.component';

describe('IntegracaoBafometroComponent', () => {
  let component: IntegracaoBafometroComponent;
  let fixture: ComponentFixture<IntegracaoBafometroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IntegracaoBafometroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IntegracaoBafometroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
