import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatBadgeModule } from '@angular/material/badge';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { GravatarModule } from 'ngx-gravatar';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatIconModule,
    MatInputModule,
    MatBadgeModule,
    GravatarModule,
  ],
  exports: [MatIconModule, MatInputModule, MatBadgeModule, GravatarModule],
})
export class MaterialDesignModule {}
