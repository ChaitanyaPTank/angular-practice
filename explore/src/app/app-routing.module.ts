import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExploreComponent } from './explore/explore.component';

const routes: Routes = [ {
  path: '',
  redirectTo: 'home',
  pathMatch: 'full'
}, {
  path: 'home',
  component: ExploreComponent
} 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
