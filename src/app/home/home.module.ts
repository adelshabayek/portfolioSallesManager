import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { CardModule } from 'primeng/card';
import { ChartModule } from 'primeng/chart';
import { NgParticlesModule } from "ng-particles";
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [HomeComponent],
  imports: [SharedModule, HomeRoutingModule,
    CardModule,
    ChartModule,
    NgParticlesModule  ,
    HttpClientModule
  ]
})
export class HomeModule {

  
}