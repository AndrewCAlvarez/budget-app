import { Component, OnInit } from '@angular/core';
import { Data } from '@angular/router';
import { ChartOptions } from 'chart.js';
import { toArray } from 'rxjs';
import {
  FinancialEventService,
  FinancialEvent,
} from '../../services/financial-event.service';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss'],
})
export class ChartComponent implements OnInit {
  financialEvents: FinancialEvent[] = [];
  data = {
    Food: 0,
    House: 0,
    Transportation: 0,
    Utilities: 0,
    Insurance: 0,
    Healthcare: 0,
    'Saving, Investing, & Debt Payments': 0,
    Personal: 0,
    Entertainment: 0,
    Miscellaneous: 0,
  };

  amountData: number[] = [];

  // Pie
  public pieChartOptions: ChartOptions<'pie'> = {
    responsive: false,
  };
  // public pieChartLabels = [ [ 'Download', 'Sales' ], [ 'In', 'Store', 'Sales' ], 'Mail Sales' ];
  public pieChartLabels = Object.keys(this.data);
  public pieChartDatasets = [
    {
      data: [6, 89, 9],
    },
  ];
  public pieChartLegend = true;
  public pieChartPlugins = [];

  constructor(private financialEventService: FinancialEventService) {}

  ngOnInit(): void {
    this.getFinancialEvents();
  }

  getFinancialEvents(): void {
    this.financialEventService
      .getFinancialEvents()
      .subscribe((financialEvents) => {
        this.financialEvents = financialEvents;
        this.setAmountByCategory();
        console.log(this.amountData);
        this.pieChartDatasets = [
          {
            data: this.amountData,
          },
        ];
      });
  }

  // Separates amounts by category
  setAmountByCategory(): void {
    // For each financial event, if its type matches a category, add the financial event's amount to the data object.
    this.financialEvents.forEach((fe) => {
      Object.keys(this.data).forEach((key: string) => {
        if (fe.type == key) {
          this.data[key as keyof typeof this.data] += fe.amount;
        }
      });
    });

    this.amountData = Object.values(this.data);
  }
}
