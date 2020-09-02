import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from '../../../../environments/environment';
import { User } from '../../models/model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private authAngular: AngularFireAuth, private http: HttpClient) {}

  createUser(username, email, password): Observable<any> {
    const user: User = {
      username,
      email,
      password,
    };
    return this.http
      .post(`${environment.url_api}/users`, user)
      .pipe(catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse) {
    console.log('AuthService -> handleError -> error', error);
    return throwError('Salio algo mal');
  }
}
