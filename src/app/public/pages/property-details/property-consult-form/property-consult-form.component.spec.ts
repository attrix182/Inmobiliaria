import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropertyConsultFormComponent } from './property-consult-form.component';

describe('PropertyConsultFormComponent', () => {
  let component: PropertyConsultFormComponent;
  let fixture: ComponentFixture<PropertyConsultFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PropertyConsultFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PropertyConsultFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
