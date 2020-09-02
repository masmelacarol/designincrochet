import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '@core/services/auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  user = false;
  login;
  constructor(
    private authService: AuthService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

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
