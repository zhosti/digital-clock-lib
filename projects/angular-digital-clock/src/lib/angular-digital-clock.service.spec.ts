import { TestBed } from '@angular/core/testing';

import { AngularDigitalClockService } from './angular-digital-clock.service';

describe('AngularDigitalClockService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AngularDigitalClockService = TestBed.get(AngularDigitalClockService);
    expect(service).toBeTruthy();
  });
});
