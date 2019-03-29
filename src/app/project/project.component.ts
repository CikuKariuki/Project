import { Component, OnInit } from '@angular/core';
import {Projects} from '../projects'
import { ProjectService } from '../projects/project.service';
import { Project } from '../project';
import {AlertsService} from '../alert-service/alerts.service'
import {HttpClient} from '@angular/common/http'
import {Quote} from '../quote-class/quote'
import {QuoteRequestService} from '../quote-http/quote-request.service'
import { Router} from '@angular/router';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  providers:[ProjectService, QuoteRequestService],
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {
  projects = Projects;
  alertService:AlertsService;
  quote:Quote;
  goToUrl(id){
    this.router.navigate(['/projects',id])
}

  constructor(projectService:ProjectService, alertService:AlertsService,private quoteService:QuoteRequestService,private router:Router){
    this.projects=projectService.getProjects();
    this.alertService=alertService; //makes the service available to the class
   }
 toggleDetails(index){
   this.projects[index].showDescription = !this.projects[index].showDescription;
 }
 deleteProject(isComplete,index){
  if (isComplete){
    let toDelete=confirm('Are you sure you want to delete this project?')
    
    if(toDelete){
      this.projects.splice(index,1)
      this.alertService.alertMe("Project has been deleted!")
      }
      }
    }
    addNewProject(project){
      let projectLength = this.projects.length;
      project.id=projectLength+1;
      project.completeDate = new Date(project.completeDate)
      this.projects.push(project)

  }

  ngOnInit() {
    this.quoteService.quoteRequest()
    this.quote=this.quoteService.quote
  }
}
    // interface ApiResponse{
    //   quote:string;
    //   author:string
    // // }
    // this.http.get<ApiResponse>("http://quotes.stormconsultancy.co.uk/random.json").subscribe(data=>{
    //     this.quote= new Quote(data.quote,data.author) 

    //  },err=>{
    //   this.quote= new Quote("Never, never, never give up.","winston churchill")
    //   console.log("Error occured ")
    //  })
    // }
  
  
