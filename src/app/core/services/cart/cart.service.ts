import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '@core/models/model';
import { environment } from '@environments/environment';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private products: Product[] = [];
  private cart = new BehaviorSubject<Product[]>([]);

  cart$ = this.cart.asObservable();
  constructor(private http: HttpClient) {}

  addCart(product: Product): void {
    const itExist = this.products.find((item) => {
      return item._id === product._id && item.size === product.size;
    });
    if (!itExist) {
      this.products.push({ ...product, count: 1 });
    } else {
      itExist.count += 1;
    }
    this.cart.next(this.products);
  }

  deleteCart(product: Product): void {
    const itExist = this.products.find((item) => {
      return item._id === product._id && item.size === product.size;
    });
    if (itExist.count <= 1) {
      const productDelete = this.products.findIndex(
        (item) => item._id === product._id && item.size === product.size
      );
      this.products.splice(productDelete, 1);
    } else {
      itExist.count -= 1;
    }
    this.cart.next(this.products);
  }

  sendMail(
    title: string,
    mailTo: string,
    mailFrom: string,
    products: Product[],
    user: object,
    total: number
  ) {
    const data = {
      title,
      mailTo,
      mailFrom,
      products,
      user,
      total,
    };

    return this.http
      .post(`${environment.url_api}/mail/send`, data)
      .pipe(catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse): Observable<never> {
    console.log('error', error);
    return throwError('Salio algo mal');
  }
}
