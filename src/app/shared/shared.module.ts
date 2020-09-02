import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MaterialDesignModule } from '../material-design/material-design.module';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { CountPipe } from './pipes/count/count.pipe';

@NgModule({
  declarations: [HeaderComponent, FooterComponent, CountPipe],
  imports: [CommonModule, RouterModule, MaterialDesignModule],
  exports: [HeaderComponent, FooterComponent, CountPipe],
})
export class SharedModule {}
