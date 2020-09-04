import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';
import { Comments } from '@core/models/model';
import { AuthService } from '@core/services/auth/auth.service';
import { CommentsService } from '@core/services/comments/comments.service';
import { RatingChangeEvent } from 'angular-star-rating';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss'],
})
export class CommentsComponent implements OnInit {
  private productId: string;
  comments$: Observable<Comments[]>;
  score = 0;
  form: FormGroup;

  fallbacks = ['monsterid', 'retro', 'robohash', 'wavatar'];

  constructor(
    private formBuilder: FormBuilder,
    private commentsService: CommentsService,
    private activatedRoute: ActivatedRoute,
    private authService: AuthService
  ) {
    this.buildForm();
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params: Params) => {
      this.productId = params.id;
      this.commentsService
        .getAllComentsByProduct(this.productId)
        .subscribe(() => {
          this.comments$ = this.commentsService.comments$;
        });
    });
  }

  onRatingChange($event: RatingChangeEvent): void {
    this.score = $event.rating;
  }

  addComment(event: Event): void {
    event.preventDefault();
    if (this.form.valid && this.score > 0) {
      const value = this.form.value;
      this.authService.hasUser().subscribe((user) => {
        this.authService.getUser(user.uid).subscribe((custom) => {
          this.commentsService
            .addComment(custom._id, this.productId, value.comment, this.score)
            .subscribe(() => {
              this.score = 0;
              this.form.reset();
            });
        });
      });
    }
  }

  private buildForm(): void {
    this.form = this.formBuilder.group({
      rating: [0, [Validators.required, Validators.min(0), Validators.max(5)]],
      comment: ['', [Validators.required, Validators.minLength(20)]],
    });
  }
}
