import { Component, OnInit } from '@angular/core';
import {
  FinancialEvent,
  FinancialEventService,
} from './financial-event.service';

@Component({
  selector: 'app-financial-events',
  templateUrl: './financial-events.component.html',
  styleUrls: ['./financial-events.component.scss'],
})
export class FinancialEventsComponent implements OnInit {
  financialEvents: FinancialEvent[] = [];

  // Inject the FinancialEventService dependency
  constructor(private financialEventService: FinancialEventService) {}

  ngOnInit(): void {
    this.getFinancialEvents();
  }

  // Subscribe to FinancialEventService and populate the financialEvents object
  getFinancialEvents(): void {
    this.financialEventService
      .getFinancialEvents()
      .subscribe((financialEvents) => (this.financialEvents = financialEvents));
  }
}
