import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import {
  FinancialEventService,
  FinancialEvent,
} from '../../services/financial-event.service';

@Component({
  selector: 'app-financial-event-details',
  templateUrl: './financial-event-details.component.html',
  styleUrls: ['./financial-event-details.component.scss'],
})
export class FinancialEventDetailsComponent implements OnInit {
  financialEvent: FinancialEvent | undefined;
  editEnabled: boolean = false;
  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private financialEventService: FinancialEventService
  ) {}

  ngOnInit(): void {
    this.getFinancialEvent();
  }

  getFinancialEvent(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    console.log(id);
    this.financialEventService
      .getFinancialEvent(id)
      .subscribe((financialEvent) => (this.financialEvent = financialEvent));
  }

  edit(): void {
    this.editEnabled = !this.editEnabled;
    console.log(`Editting enabled: ${this.editEnabled}`);
  }
}
