import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DigitBoxComponent } from './digit-box.component';

describe('DigitBoxComponent', () => {
  let component: DigitBoxComponent;
  let fixture: ComponentFixture<DigitBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DigitBoxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DigitBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
