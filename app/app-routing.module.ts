import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'
import { HomeComponent } from './home/home.component';
import {ResearchComponent} from './research/research.component';

const routes: Routes = [
  {
    path:'',
    redirectTo:"home",
    pathMatch:'full'
  },
  {
    path:'home',
    component:HomeComponent,
    pathMatch:'full'
  },

  // {
  //   path:'contact',
  //   component:ContactComponent
  // },
  {
    // for lazy loading
    path:'projects',
    loadChildren:() => import('./projects/projects.module').then(x => x.ProjectsModule)
  },
  {
    path:'research',
    component: ResearchComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
