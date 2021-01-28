import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularDigitalClockComponent } from './angular-digital-clock.component';

describe('AngularDigitalClockComponent', () => {
  let component: AngularDigitalClockComponent;
  let fixture: ComponentFixture<AngularDigitalClockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AngularDigitalClockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularDigitalClockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
