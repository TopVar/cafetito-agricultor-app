import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IngresoParcialidadComponent } from './ingreso-parcialidad.component';

describe('IngresoParcialidadComponent', () => {
  let component: IngresoParcialidadComponent;
  let fixture: ComponentFixture<IngresoParcialidadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IngresoParcialidadComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IngresoParcialidadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
