import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs';
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';

// This interface allows the service to specify a typed response
export interface FinancialEvent {
  id: number;
  amount: number;
  type: string;
  description: string;
}

/** Some http requests will require an httpOptions parameter instantiated here. */
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    Authorization: 'my-auth-token',
  }),
};

@Injectable({
  providedIn: 'root',
})
export class FinancialEventService {
  // TODO: This url is for a specify user instead of using a parameter related to the logged in user. User accounts have not yet been implemented. For now, I extend the url manually in each request method.
  financialEventUrl = 'http://localhost:8080';

  // Inject HttpClient into our service via the constructor
  constructor(private http: HttpClient) {}

  /* ------------ HTTP REQUESTS -------------------- */

  /* GET:  Get financial events from the server via the financial event service. 
  Fetch an array of Financial Event objects
  Observable is a design pattern called Observer. The Object (the subject) maintains a list of dependents (observers).   */
  getFinancialEvents(): Observable<FinancialEvent[]> {
    return this.http
      .get<FinancialEvent[]>(this.financialEventUrl + '/users/1/events')
      .pipe(
        // Retry will send another request to the server. Sometimes errors are transient, especially in a mobile context.
        retry(3),
        catchError(this.handleError('getFinancialEvents', []))
      );
  }

  /** POST: Add a new financial event to the server via the service.
   * TODO: Possible errors with type needing date and id. Maybe this should be handled by the api server-side? When rerendered client-side it generates its own id.
   */
  addFinancialEvent(
    amount: number,
    type: string,
    description: string
  ): Observable<FinancialEvent> {
    const financialEvent: FinancialEvent = {
      id: 0,
      amount: amount,
      type: type,
      description: description,
    };

    return this.http
      .post<FinancialEvent>(
        this.financialEventUrl + '/events',
        financialEvent,
        httpOptions
      )
      .pipe(catchError(this.handleError('addFinancialEvent', financialEvent)));
  }

  /* ------------------- ERROR HANDLING -------------------- */

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   *
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error); // log to console instead

      // TODO: Possibly create a separate message service like the Angular docs.
      console.log(`${operation} failed: ${error.message}}`);

      return of(result as T);
    };
  }
}