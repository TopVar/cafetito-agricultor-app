import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CuentasCerradasComponent } from './cuentas-cerradas.component';

describe('CuentasCerradasComponent', () => {
  let component: CuentasCerradasComponent;
  let fixture: ComponentFixture<CuentasCerradasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CuentasCerradasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CuentasCerradasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
