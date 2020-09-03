import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '@core/models/model';
import { AuthService } from '@core/services/auth/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  form: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.buildForm();
  }

  ngOnInit(): void {}

  register(event: Event): void {
    event.preventDefault();
    if (this.form.valid) {
      const value = this.form.value;
      const userForm: User = {
        displayName: value.name,
        email: value.email,
        password: value.password,
      };
      this.authService.createUser(userForm).subscribe(() => {
        this.router.navigate(['/auth/login']);
      });
    }
  }

  private buildForm(): void {
    this.form = this.formBuilder.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }
}
