import { TestBed } from '@angular/core/testing';

import { FinancialEventService } from './financial-event.service';

describe('FinancialEventService', () => {
  let service: FinancialEventService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FinancialEventService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
