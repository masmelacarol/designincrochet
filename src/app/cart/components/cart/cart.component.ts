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
  user: {
    name;
    email;
  };

  constructor(
    private cartService: CartService,
    private formBuilder: FormBuilder,
    private authService: AuthService
  ) {
    this.products$ = this.cartService.cart$;
    this.buildForm();

    this.authService.isUser().subscribe((userInfo) => {
      this.user = {
        name: userInfo.displayName,
        email: userInfo.email,
      };
    });
  }

  ngOnInit(): void {}

  addCart(product) {
    this.cartService.addCart(product);
  }

  deleteCart(product) {
    this.cartService.deleteCart(product);
  }

  private buildForm() {
    this.form = this.formBuilder.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required]],
      address: ['', [Validators.required]],
      city: ['', [Validators.required]],
      phoneNumber: ['', Validators.required],
    });
  }
}
