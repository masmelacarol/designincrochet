import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@core/services/auth/auth.service';
import { CartService } from '@core/services/cart/cart.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  user = false;
  login;
  total$: Observable<number>;
  constructor(
    private authService: AuthService,
    private cartService: CartService,
    private router: Router
  ) {
    this.total$ = this.cartService.cart$.pipe(
      map((cartProducts) => {
        const countProducts = cartProducts
          .map((cart) => cart.count)
          .reduce((value, count) => value + count, 0);
        return countProducts;
      })
    );
  }

  ngOnInit(): void {
    this.login = this.router.url === '/auth/login' ? false : true;
    this.authService.isUser().subscribe((user) => {
      if (user) {
        this.user = true;
      }
    });
  }

  logOut() {
    this.authService.logout().then(() => {
      this.router.navigate(['/home']);
      this.user = false;
    });
  }
}
