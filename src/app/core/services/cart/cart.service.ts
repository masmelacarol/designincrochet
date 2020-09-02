import { Injectable } from '@angular/core';
import { Product } from '@core/models/model';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private products: Product[] = [];
  private cart = new BehaviorSubject<Product[]>([]);

  cart$ = this.cart.asObservable();
  constructor() {}

  addCart(product: Product): void {
    this.products = [...this.products, product];
    this.cart.next(this.products);
  }
}
