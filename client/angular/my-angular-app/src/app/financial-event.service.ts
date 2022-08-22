import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs';

export interface FinancialEvent {
  id: number;
  amount: number;
  type: string;
  description: string;
}

@Injectable({
  providedIn: 'root',
})
export class FinancialEventService {
  financialEventUrl = 'http://localhost:8080/users/1/events';

  constructor(private http: HttpClient) {}

  getFinancialEvents() {
    return this.http.get<FinancialEvent>(this.financialEventUrl);
  }
}
