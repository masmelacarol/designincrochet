import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MaterialDesignModule } from '@material-design/material-design.module';
import { CartRoutingModule } from './cart-routing.module';
import { CartComponent } from './components/cart/cart.component';

@NgModule({
  declarations: [CartComponent],
  imports: [CommonModule, CartRoutingModule, MaterialDesignModule],
})
export class CartModule {}
