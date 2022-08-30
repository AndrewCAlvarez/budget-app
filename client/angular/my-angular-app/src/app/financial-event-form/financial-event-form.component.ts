import { Component, Input, OnInit } from '@angular/core';
import {
  FinancialEvent,
  FinancialEventService,
} from '../financial-events/financial-event.service';

@Component({
  selector: 'app-financial-event-form',
  templateUrl: './financial-event-form.component.html',
  styleUrls: ['./financial-event-form.component.scss'],
})
export class FinancialEventFormComponent implements OnInit {
  @Input() financialEvent!: FinancialEvent | undefined;
  @Input() isNewFinancialEvent: boolean | undefined;

  constructor(private financialEventService: FinancialEventService) {}

  ngOnInit(): void {}

  save(amount: number, type: string, description: string): void {
    if (this.financialEvent) {
      this.financialEventService
        .updateFinancialEvent(this.financialEvent.id, amount, type, description)
        .subscribe();
      // TODO: Implement a go back feature to return to details page.
    }
  }

  delete(): void {
    if (this.financialEvent) {
      this.financialEventService
        .deleteFinancialEvent(this.financialEvent.id)
        .subscribe();
    }
  }

  /** Add new financial event.
   * TODO: Figure out how to tie the event to a user with an id and date.
   */
  add(amount: number, type: string, description: string): void {
    this.financialEventService
      .addFinancialEvent(amount, type, description)
      .subscribe();
  }
}
