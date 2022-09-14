import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

/** Some http requests will require an httpOptions parameter instantiated here. */
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    Authorization: 'my-auth-token',
  }),
};

export interface User {
  username: '';
  password: '';
}

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  constructor(private http: HttpClient) {}

  url = 'http://localhost:8080';

  authenticate(username: string, password: string): Observable<User> {
    console.log('Sending request to ' + this.url + '/login');
    let user = {
      username: username,
      password: password,
    };
    return this.http.post<User>(this.url + '/login', user, httpOptions);
  }
}
