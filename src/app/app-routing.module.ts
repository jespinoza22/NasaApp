import { PrincipalComponent } from './home/principal/principal.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ImageDayComponent } from '../app/home/image-day/image-day.component';

const routes: Routes = [
  {
    path: 'imageDay',
    component: ImageDayComponent
  },
  {
    path: '',
    component: PrincipalComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
