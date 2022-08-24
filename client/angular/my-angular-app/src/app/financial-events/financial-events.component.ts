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

  // OnInit is a good place to run code once before rendering.
  ngOnInit(): void {
    this.getFinancialEvents();
  }

  // Subscribe to FinancialEventService and populate the financialEvents object. Subscribing to a service allows a component to observe for changes made in that service.
  getFinancialEvents(): void {
    this.financialEventService
      .getFinancialEvents()
      .subscribe((financialEvents) => (this.financialEvents = financialEvents));
  }

  /** Add new financial event.
   * TODO: Figure out how to tie the event to a user with an id and date.
   */
  add(amount: number, type: string, description: string): void {
    this.financialEventService
      .addFinancialEvent(amount, type, description)
      .subscribe((financialEvent) => {
        this.financialEvents.push(financialEvent);
      });
    /** TODO: This call to GET may be unnecessary. */
    this.getFinancialEvents();
  }
}
