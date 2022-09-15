import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

/** Some http requests will require an httpOptions parameter instantiated here. */
// const httpOptions = {
//   headers: new HttpHeaders({
//     'Content-Type': 'application/json',
//     Authorization: 'my-auth-token',
//   }),
// };

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  constructor(private http: HttpClient) {}

  url = 'http://localhost:8080';

  authenticate(username: string, password: string) {
    console.log('Sending request to ' + this.url + '/login');

    let authString = 'Basic' + ` ${username}:${password}`;

    let httpOptions = {
      headers: new HttpHeaders()
        .set('Content-Type', 'applicatoin/json')
        .set('Authorization', authString),
    };
    return this.http.post(this.url + '/login', {}, httpOptions);
  }
}
