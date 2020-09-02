import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  form: FormGroup;
  constructor(private formBuilder: FormBuilder) {
    this.buildForm();
  }

  ngOnInit(): void {}

  register(event: Event) {
    event.preventDefault();
    console.log('hola');
  }

  private buildForm() {
    this.form = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(40)]],
      email: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
  }
}
