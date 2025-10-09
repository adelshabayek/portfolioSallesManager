import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExperienceRoutingModule } from './experience-routing.module';
import { ExperienceComponent } from './experience.component';
import { CardModule } from 'primeng/card';
import { AccordionModule } from 'primeng/accordion';
import { TimelineModule } from 'primeng/timeline';

import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    ExperienceComponent
  ],
  imports: [
    CommonModule,
    ExperienceRoutingModule,
    CardModule,
    AccordionModule,
    TimelineModule,
    HttpClientModule
  ]
})
export class ExperienceModule { }
