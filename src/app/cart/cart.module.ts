import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialDesignModule } from '@material-design/material-design.module';
import { SharedModule } from '@shared/shared.module';
import { CartRoutingModule } from './cart-routing.module';
import { CartComponent } from './components/cart/cart.component';

@NgModule({
  declarations: [CartComponent],
  imports: [
    CommonModule,
    CartRoutingModule,
    MaterialDesignModule,
    SharedModule,
    ReactiveFormsModule,
  ],
})
export class CartModule {}
