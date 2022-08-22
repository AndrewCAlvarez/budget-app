import { Component, OnInit } from '@angular/core';
import {
  FinancialEvent,
  FinancialEventService,
} from '../financial-event.service';

@Component({
  selector: 'app-financial-events',
  templateUrl: './financial-events.component.html',
  styleUrls: ['./financial-events.component.scss'],
})
export class FinancialEventsComponent implements OnInit {
  financialEvent: FinancialEvent | undefined;

  constructor(private financialEventService: FinancialEventService) {}

  ngOnInit(): void {
    this.getFinancialEvents();
  }

  getFinancialEvents() {
    this.financialEventService
      .getFinancialEvents()
      .subscribe((data: FinancialEvent) => {
        this.financialEvent = { ...data };
      });
  }
}
