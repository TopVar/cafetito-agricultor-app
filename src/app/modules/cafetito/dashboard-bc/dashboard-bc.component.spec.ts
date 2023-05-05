import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardBcComponent } from './dashboard-bc.component';

describe('DashboardBcComponent', () => {
  let component: DashboardBcComponent;
  let fixture: ComponentFixture<DashboardBcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardBcComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardBcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
