import { TestBed } from '@angular/core/testing';

import { FinancialEventDataService } from './financial-event-data.service';

describe('FinancialEventDataService', () => {
  let service: FinancialEventDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FinancialEventDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
