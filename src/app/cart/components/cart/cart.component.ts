import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
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
    private authService: AuthService,
    private router: Router,
    private snackBar: MatSnackBar
  ) {
    this.products$ = this.cartService.cart$;
    this.getPrice();
    this.getUser();
    this.buildForm();
  }

  ngOnInit(): void {}

  getUser(): void {
    this.authService.isUser().subscribe((userInfo: User) => {
      this.user = {
        displayName: userInfo.displayName,
        email: userInfo.email,
      };
    });
  }

  getPrice(): void {
    this.products$.subscribe((product) => {
      this.total = product
        .map((item) => item.price * item.count)
        .reduce((value, count) => count + value, 0);
    });
  }

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
        .subscribe(() => this.openSnackBar('Mensaje enviado'));

      this.cartService.deleteAllCart();
      this.router.navigate(['/']).catch((error) => {
        alert('no es valido');
      });
    }
  }

  openSnackBar(msj): void {
    this.snackBar.open(msj, 'Close', {
      duration: 2000,
    });
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
