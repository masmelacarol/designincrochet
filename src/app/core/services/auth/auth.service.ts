import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { environment } from '@environments/environment';
import { User } from 'firebase';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { TokenService } from '../token/token.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
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

  login(email: string, password: string): Promise<any> {
    return this.auth.signInWithEmailAndPassword(email, password);
  }

  isUser(): Observable<firebase.User> {
    return this.auth.user;
  }

  generateToken(uid: string): Observable<any> {
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

  logout(): Promise<any> {
    return this.auth.signOut();
  }

  hasUser(): Observable<User> {
    return this.auth.authState;
  }

  private handleError(error: HttpErrorResponse): Observable<never> {
    return throwError('Salio algo mal');
  }
}
