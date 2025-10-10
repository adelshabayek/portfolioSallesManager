import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { CardModule } from 'primeng/card';
import { ChartModule } from 'primeng/chart';
import { NgParticlesModule } from "ng-particles";
import { HttpClientModule } from '@angular/common/http';

import { AboutModule } from "../about/about.module";
import { SkillsModule } from "../skills/skills.module";
import { ExperienceModule } from "../experience/experience.module";
import { ContactModule } from "../contact/contact.module";

@NgModule({
  declarations: [HomeComponent ],
  imports: [HomeRoutingModule,
    CardModule,
    ChartModule,
    NgParticlesModule,
    HttpClientModule,
    AboutModule, SkillsModule, ExperienceModule, ContactModule]
})
export class HomeModule {

  
}