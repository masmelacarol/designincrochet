import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { RatingChangeEvent } from 'angular-star-rating';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss'],
})
export class CommentsComponent implements OnInit {
  email = 'carolstefannym@gmail.com';
  rating: FormControl;
  score = 0;
  form: FormGroup;

  fallbacks = ['monsterid', 'retro', 'robohash', 'wavatar'];

  constructor(private formBuilder: FormBuilder) {
    this.buildForm();
    this.rating = new FormControl(0, Validators.required);
    this.rating.valueChanges.subscribe((value) => {
      console.log('CommentsComponent -> constructor -> value', value);
      this.score = value;
    });
  }

  ngOnInit(): void {}

  onRatingChange($event: RatingChangeEvent): void {
    console.log('onRatingUpdated $event: ', $event);
    this.score = $event.rating;
  }

  addComment(event: Event): void {
    event.preventDefault();
    console.log('hola');
  }

  private buildForm() {
    this.form = this.formBuilder.group({
      comment: ['', [Validators.required, Validators.minLength(20)]],
    });
  }
}
