import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { SubHomeComponent } from './sub-home/sub-home.component';
import { CarouselModule } from 'primeng/carousel';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { SubHomeRoutingModule } from './sub-home-routing.module';

@NgModule({
  declarations: [
    SubHomeComponent
  ],
  imports: [
    CommonModule,
    SubHomeRoutingModule,
    CarouselModule,


    CardModule,
    ButtonModule
  ],
  exports: [SubHomeComponent]
})
export class SubHomeModule { }
