import { Component, OnInit, Input } from '@angular/core';
import { financialEvents } from '../financial-events';

@Component({
  selector: 'app-financial-event-table',
  templateUrl: './financial-event-table.component.html',
  styleUrls: ['./financial-event-table.component.scss'],
})
export class FinancialEventTableComponent implements OnInit {
  constructor() {}

  financialEvents = financialEvents;

  deleteFinancialEvent(id: number) {
    window.alert('Deleting financial events needs to be implemented!');
  }

  ngOnInit(): void {}
}
