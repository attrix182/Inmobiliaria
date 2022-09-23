import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminPropertiesListComponent } from './admin-properties-list.component';

describe('AdminPropertiesListComponent', () => {
  let component: AdminPropertiesListComponent;
  let fixture: ComponentFixture<AdminPropertiesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminPropertiesListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminPropertiesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
