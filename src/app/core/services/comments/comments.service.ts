import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@environments/environment';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class CommentsService {
  constructor(private http: HttpClient) {}

  getAllComentsByProduct(idProduct): Observable<any> {
    return this.http.get(`${environment.url_api}/comments/${idProduct}`).pipe(
      catchError((error) => this.handleError(error)),
      map((response: any) => response.body)
    );
  }

  private handleError(error: HttpErrorResponse): Observable<never> {
    return throwError('Salio algo mal');
  }
}
