import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectsRoutingModule } from './projects-routing.module';
import { ProjectListComponent } from './project-list/project-list.component';
import { ProjectSingleComponent } from './project-single/project-single.component';


@NgModule({
  declarations: [
    ProjectListComponent,
    ProjectSingleComponent,
    
  ],
  imports: [
    CommonModule,
    ProjectsRoutingModule,
   
  ]
})
export class ProjectsModule { }
