import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';
import { CommentsService } from '@core/services/comments/comments.service';
import { RatingChangeEvent } from 'angular-star-rating';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss'],
})
export class CommentsComponent implements OnInit {
  productId;
  email = 'carolstefannym@gmail.com';
  score = 0;
  form: FormGroup;
  comments;

  fallbacks = ['monsterid', 'retro', 'robohash', 'wavatar'];

  constructor(
    private formBuilder: FormBuilder,
    private commentsService: CommentsService,
    private activatedRoute: ActivatedRoute
  ) {
    this.buildForm();
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params: Params) => {
      this.productId = params.id;
      this.commentsService
        .getAllComentsByProduct(this.productId)
        .subscribe((comments) => {
          console.log('CommentsComponent -> comments', comments);
          this.comments = comments;
        });
    });
  }

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
