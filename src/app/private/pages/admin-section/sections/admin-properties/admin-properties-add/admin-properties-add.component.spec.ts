import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminPropertiesAddComponent } from './admin-properties-add.component';

describe('AdminPropertiesAddComponent', () => {
  let component: AdminPropertiesAddComponent;
  let fixture: ComponentFixture<AdminPropertiesAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdminPropertiesAddComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminPropertiesAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
