import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnviarParcialidadesComponent } from './enviar-parcialidades.component';

describe('EnviarParcialidadesComponent', () => {
  let component: EnviarParcialidadesComponent;
  let fixture: ComponentFixture<EnviarParcialidadesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnviarParcialidadesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EnviarParcialidadesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
