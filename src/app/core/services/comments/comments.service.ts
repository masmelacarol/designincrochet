import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Comments } from '@core/models/model';
import { environment } from '@environments/environment';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class CommentsService {
  private comments = new BehaviorSubject<[]>([]);
  comments$ = this.comments.asObservable();

  constructor(private http: HttpClient) {}

  getAllComentsByProduct(idProduct): Observable<void> {
    return this.http
      .get<Comments>(`${environment.url_api}/comments/${idProduct}`)
      .pipe(
        catchError((error) => this.handleError(error)),
        map((response: any) => this.comments.next(response.body))
      );
  }

  addComment(idUser, idProduct, comment, rating): Observable<Comments> {
    return this.http.post<Comments>(`${environment.url_api}/comments/`, {
      users: idUser,
      products: idProduct,
      comment,
      rating,
    });
  }

  private handleError(error: HttpErrorResponse): Observable<never> {
    return throwError('Salio algo mal');
  }
}
