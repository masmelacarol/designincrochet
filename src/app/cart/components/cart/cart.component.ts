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
      const produ = this.products$.subscribe((products) => {
        console.log('CartComponent -> getUserForSend -> products', products);
      });
      console.log('CartComponent -> getUserForSend -> produ', produ);

      console.log('this.user', this.user);
      console.log('this.product', produ);
    }
  }

  payCart() {
    // const link = "https://wa.me/573123342596?text=Hola+DesignInCrochet%2C+estoy+interasad%40+en"
  }

  private buildForm(): void {
    this.form = this.formBuilder.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required]],
      address: ['', [Validators.required]],
      city: ['', [Validators.required]],
      phoneNumber: ['', Validators.required],
    });
  }
}
