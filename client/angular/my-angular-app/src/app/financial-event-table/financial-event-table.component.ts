import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FinancialEvent, financialEvents } from '../../assets/financial-events';
import { FinancialEventDataService } from '../financial-event-data.service';

@Component({
  selector: 'app-financial-event-table',
  templateUrl: './financial-event-table.component.html',
  styleUrls: ['./financial-event-table.component.scss'],
})
export class FinancialEventTableComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private FinancialEventDataService: FinancialEventDataService
  ) {}

  financialEvents = financialEvents;

  addFinancialEventData(financialEvent: FinancialEvent) {
    this.FinancialEventDataService.addFinancialEventData(financialEvent);
    window.alert('Added financial event data!');
  }

  deleteFinancialEvent(id: number) {
    window.alert('Deleting financial events needs to be implemented!');
  }

  ngOnInit(): void {}
}
