import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RatingChangeEvent } from 'angular-star-rating';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss'],
})
export class CommentsComponent implements OnInit {
  email = 'carolstefannym@gmail.com';
  score = 0;
  form: FormGroup;

  fallbacks = ['monsterid', 'retro', 'robohash', 'wavatar'];

  constructor(private formBuilder: FormBuilder) {
    this.buildForm();
  }

  ngOnInit(): void {}

  onRatingChange($event: RatingChangeEvent): void {
    this.score = $event.rating;
  }

  addComment(event: Event): void {
    event.preventDefault();
    console.log('hola');
  }

  private buildForm(): void {
    this.form = this.formBuilder.group({
      rating: [0, [Validators.required]],
      comment: ['', [Validators.required, Validators.minLength(20)]],
    });
  }
}
