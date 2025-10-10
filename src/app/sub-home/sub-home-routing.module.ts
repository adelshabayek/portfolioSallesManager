import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SubHomeComponent } from './sub-home/sub-home.component';

const routes: Routes = [{ path: '', component: SubHomeComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SubHomeRoutingModule { }
