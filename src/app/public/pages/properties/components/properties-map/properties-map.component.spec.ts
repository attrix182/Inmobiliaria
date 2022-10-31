import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropertiesMapComponent } from './properties-map.component';

describe('PropertiesMapComponent', () => {
  let component: PropertiesMapComponent;
  let fixture: ComponentFixture<PropertiesMapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PropertiesMapComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PropertiesMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
