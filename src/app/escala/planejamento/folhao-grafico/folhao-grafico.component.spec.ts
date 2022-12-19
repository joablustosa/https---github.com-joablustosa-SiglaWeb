import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FolhaoGraficoComponent } from './folhao-grafico.component';

describe('FolhaoGraficoComponent', () => {
  let component: FolhaoGraficoComponent;
  let fixture: ComponentFixture<FolhaoGraficoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FolhaoGraficoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FolhaoGraficoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
