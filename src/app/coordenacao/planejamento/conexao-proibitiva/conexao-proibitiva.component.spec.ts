import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConexaoProibitivaComponent } from './conexao-proibitiva.component';

describe('ConexaoProibitivaComponent', () => {
  let component: ConexaoProibitivaComponent;
  let fixture: ComponentFixture<ConexaoProibitivaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConexaoProibitivaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConexaoProibitivaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
