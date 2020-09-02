import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [],
  imports: [CommonModule, MatIconModule, MatInputModule],
  exports: [MatIconModule, MatInputModule],
})
export class MaterialDesignModule {}
