import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatBadgeModule } from '@angular/material/badge';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { GravatarModule } from 'ngx-gravatar';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatIconModule,
    MatInputModule,
    MatBadgeModule,
    GravatarModule,
    MatDialogModule,
    MatSnackBarModule,
  ],
  exports: [
    MatIconModule,
    MatInputModule,
    MatBadgeModule,
    GravatarModule,
    MatDialogModule,
    MatSnackBarModule,
  ],
})
export class MaterialDesignModule {}
