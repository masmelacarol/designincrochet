import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '@core/models/model';
import { environment } from '@environments/environment';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor(private http: HttpClient) {}

  getAllProducts(): Observable<Product> {
    return this.http.get<Product>(`${environment.url_api}/products`).pipe(
      catchError(this.handleError),
      map((response: any) => response.body)
    );
  }

  getProductById(id: string): Observable<Product> {
    return this.http.get<Product>(`${environment.url_api}/products/${id}`).pipe(
      catchError(this.handleError),
      map((response: any) => response.body)
    );
  }

  private handleError(error: HttpErrorResponse): Observable<never> {
    return throwError('Salio algo mal');
  }
}
