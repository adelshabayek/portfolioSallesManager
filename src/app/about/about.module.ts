import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutRoutingModule } from './about-routing.module';
import { AboutComponent } from './about.component';
import { CardModule } from 'primeng/card';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AboutComponent
  ],
  imports: [
    CommonModule,
    AboutRoutingModule,
    CardModule,
    HttpClientModule
  ]
})
export class AboutModule { }
