import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarBcComponent } from './sidebar-bc.component';

describe('SidebarBcComponent', () => {
  let component: SidebarBcComponent;
  let fixture: ComponentFixture<SidebarBcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SidebarBcComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SidebarBcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
