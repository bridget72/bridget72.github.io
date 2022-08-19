import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectListComponent } from './project-list/project-list.component';
import { ProjectSingleComponent } from './project-single/project-single.component';

const routes: Routes = [
  {
    path:'',
    component:ProjectListComponent
  },
  {
    path:':projectName',
    component:ProjectSingleComponent

  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectsRoutingModule { }
