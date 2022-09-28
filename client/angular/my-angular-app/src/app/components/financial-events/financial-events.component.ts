import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import {
  FinancialEvent,
  FinancialEventService,
} from '../../services/financial-event.service';

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
}
