import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Product } from '@core/models/model';
import { AuthService } from '@core/services/auth/auth.service';
import { CartService } from '@core/services/cart/cart.service';
import { User } from 'firebase';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
  products$: Observable<Product[]>;
  form: FormGroup;
  count: FormControl;
  user: Partial<User>;
  total = 0;
  shipment = 10000;

  constructor(
    private cartService: CartService,
    private formBuilder: FormBuilder,
    private authService: AuthService
  ) {
    this.products$ = this.cartService.cart$;

    this.authService.isUser().subscribe((userInfo: User) => {
      this.user = {
        displayName: userInfo.displayName,
        email: userInfo.email,
      };
    });
    this.products$.subscribe((product) => {
      this.total = product
        .map((item) => item.price * item.count)
        .reduce((value, count) => count + value, 0);
    });
    this.buildForm();
  }

  ngOnInit(): void {}

  addCart(product): void {
    this.cartService.addCart(product);
  }

  deleteCart(product): void {
    this.cartService.deleteCart(product);
  }

  getUserForSend(event: Event): void {
    event.preventDefault();
    if (this.form.valid) {
      const value = this.form.value;
      this.user = {
        ...value,
      };
    }
  }

  payCart(): void {
    let productsCart = [];
    this.products$.subscribe((products) => {
      productsCart = products;
    });
    if (this.form.valid) {
      this.cartService
        .sendMail(
          'Recibo',
          'carolstefannym@gmail.com',
          'designincrochet.app@gmail.com',
          productsCart,
          this.user,
          this.total
        )
        .subscribe((data) => console.log('Enviadooo', data));
      this.cartService.deleteAllCart();
    }
  }

  private buildForm(): void {
    this.form = this.formBuilder.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      address: ['', [Validators.required]],
      city: ['', [Validators.required]],
      phoneNumber: ['', [Validators.required, Validators.minLength(10)]],
    });
  }
}
