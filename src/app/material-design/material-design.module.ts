import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatBadgeModule } from '@angular/material/badge';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [],
  imports: [CommonModule, MatIconModule, MatInputModule, MatBadgeModule],
  exports: [MatIconModule, MatInputModule, MatBadgeModule],
})
export class MaterialDesignModule {}
