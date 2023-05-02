import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarTranspotistaComponent } from './agregar-transpotista.component';

describe('AgregarTranspotistaComponent', () => {
  let component: AgregarTranspotistaComponent;
  let fixture: ComponentFixture<AgregarTranspotistaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgregarTranspotistaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgregarTranspotistaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
