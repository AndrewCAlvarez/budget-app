import { Injectable } from '@angular/core';
import { FinancialEvent } from 'src/assets/financial-events';

@Injectable({
  providedIn: 'root',
})
export class FinancialEventDataService {
  constructor() {}

  FinancialEvents: FinancialEvent[] = [];

  addFinancialEventData(financialEvent: FinancialEvent) {
    this.FinancialEvents.push();
  }

  getFinancialEventData() {
    return this.FinancialEvents;
  }
}
