import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs';

// This interface allows the service to specify a typed response
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

  // Inject HttpClient into our service via the constructor
  constructor(private http: HttpClient) {}

  // Fetch an array of Financial Event objects
  /* Observable is a design pattern called Observer. The Object (the subject) maintains a list of dependents (observers).   */
  getFinancialEvents(): Observable<FinancialEvent[]> {
    return this.http.get<FinancialEvent[]>(this.financialEventUrl);
  }
}
