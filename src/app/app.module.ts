import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {AlertsService} from './alert-service/alerts.service'
import {HttpClientModule} from '@angular/common/http'
import { NgProgressModule } from '@ngx-progressbar/core';
import { NgProgressHttpModule } from '@ngx-progressbar/http';
import { RouterModule, Routes } from '@angular/router';
import {RoutingModule} from './routing/routing.module'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProjectComponent } from './project/project.component';
import { ProjectDetailsComponent } from './project-details/project-details.component';
import { StrikethroughDirective } from './strikethrough.directive';
import { DateCountPipe } from './date-count.pipe';
import { ProjectFormComponent } from './project-form/project-form.component';
import { AboutComponent } from './about/about.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes:Routes=[
  {path:"projects",component:ProjectComponent},
  {path:"about",component:AboutComponent},
  {path:"",redirectTo:"/projects",pathMatch:"full"},
  {path:'**',component:NotFoundComponent}
  ]

@NgModule({
  declarations: [
    AppComponent,
    ProjectComponent,
    ProjectDetailsComponent,
    StrikethroughDirective,
    DateCountPipe,
    ProjectFormComponent,
    AboutComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    RoutingModule,
    FormsModule,
    HttpClientModule,
    NgProgressHttpModule, 
    NgProgressModule,
    // RouterModule.forRoot(routes)
  ],
  providers: [AlertsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
