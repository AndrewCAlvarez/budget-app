import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import {
  FinancialEvent,
  FinancialEventService,
} from '../../services/financial-event.service';
import { FinancialEventsComponent } from '../financial-events/financial-events.component';

@Component({
  selector: 'app-financial-event-form',
  templateUrl: './financial-event-form.component.html',
  styleUrls: ['./financial-event-form.component.scss'],
})
export class FinancialEventFormComponent implements OnInit {
  transactionForm = this.fb.group({
    amount: [10],
    type: ['Food'],
    description: [''],
  });

  @Input() financialEvent!: FinancialEvent | undefined;
  @Input() isNewFinancialEvent: boolean | undefined;

  types = [
    'Food',
    'House',
    'Transportation',
    'Utilities',
    'Insurance',
    'Healthcare',
    'Saving, Investing, & Debt Payments',
    'Personal',
    'Entertainment',
    'Miscellaneous',
  ];

  submitted = false;
  onSubmit(): void {
    if (
      typeof this.transactionForm.value.amount === 'number' &&
      typeof this.transactionForm.value.type === 'string' &&
      typeof this.transactionForm.value.description === 'string'
    ) {
      this.add(
        this.transactionForm.value.amount,
        this.transactionForm.value.type,
        this.transactionForm.value.description
      );
    }

    console.log('Submitted.');
    this.submitted = true;
    this.transactionForm.reset();
  }

  constructor(
    private financialEventService: FinancialEventService,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {}

  update(amount: number, type: string, description: string): void {
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
