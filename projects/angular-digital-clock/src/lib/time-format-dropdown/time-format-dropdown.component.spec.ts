import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeFormatDropdownComponent } from './time-format-dropdown.component';

describe('TimeFormatDropdownComponent', () => {
  let component: TimeFormatDropdownComponent;
  let fixture: ComponentFixture<TimeFormatDropdownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TimeFormatDropdownComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TimeFormatDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
