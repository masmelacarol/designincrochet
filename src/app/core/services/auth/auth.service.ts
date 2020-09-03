import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { environment } from '@environments/environment';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { TokenService } from '../token/token.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private id: string;
  constructor(
    private auth: AngularFireAuth,
    private http: HttpClient,
    private tokenService: TokenService
  ) {}

  createUser(user): Observable<any> {
    return this.http
      .post(`${environment.url_api}/users`, user)
      .pipe(catchError(this.handleError));
  }

  login() {
    return this.auth.signInWithCustomToken(this.tokenService.getToken());
  }

  isUser() {
    console.log('tests', this.auth.tenantId);
    return this.auth.user;
  }

  setId(id) {
    return (this.id = id);
  }

  getId() {
    return this.id;
  }

  generateToken(uid: string) {
    return this.http
      .post(`${environment.url_api}/users/auth`, {
        uid,
      })
      .pipe(
        tap((data: { body: string }) => {
          const token = data.body;
          this.tokenService.saveToken(token);
        })
      );
  }

  logout() {
    return this.auth.signOut();
  }

  hasUser() {
    return this.auth.authState;
  }

  private handleError(error: HttpErrorResponse) {
    return throwError('Salio algo mal');
  }
}
