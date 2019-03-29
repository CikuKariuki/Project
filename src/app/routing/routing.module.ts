import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule,Routes} from '@angular/router';
import { ProjectComponent } from '../project/project.component';
import { AboutComponent } from '../about/about.component';
import { NotFoundComponent } from '../not-found/not-found.component';
import { ProjectDetailsComponent } from '../project-details/project-details.component';

const routes:Routes=[
  {path:"projects",component:ProjectComponent},
  {path:"about",component:AboutComponent},
  {path:"",redirectTo:"/goals",pathMatch:"full"},
  {path:'**',component:NotFoundComponent},
  {path:'projects/:id',component:ProjectDetailsComponent},
]
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule],
  declarations: []
})
export class RoutingModule { }
