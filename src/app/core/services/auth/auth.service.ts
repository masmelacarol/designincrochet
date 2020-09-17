import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { User } from '@core/models/model';
import { environment } from '@environments/environment';
import { Observable, throwError } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
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

  createUser(user: User): Observable<Partial<User>> {
    return this.http
      .post<User>(`${environment.url_api}/users`, user)
      .pipe(catchError(this.handleError));
  }

  login(
    email: string,
    password: string
  ): Promise<firebase.auth.UserCredential> {
    return this.auth.signInWithEmailAndPassword(email, password);
  }

  isUser(): Observable<any> {
    return this.auth.user;
  }

  getUser(uid: string): Observable<User> {
    return this.http.get<User>(`${environment.url_api}/users/${uid}`).pipe(
      catchError(this.handleError),
      map((response: any) => response.body)
    );
  }

  generateToken(uid: string): Observable<{}> {
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

  logout(): Promise<void> {
    return this.auth.signOut();
  }

  hasUser(): Observable<firebase.User> {
    return this.auth.authState;
  }

  private handleError(error: HttpErrorResponse): Observable<never> {
    console.log('error', error);
    return throwError('Salio algo mal');
  }
}
