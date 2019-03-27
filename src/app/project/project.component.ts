import { Component, OnInit } from '@angular/core';
import {Project} from '../project'

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {
 projects=[
  new Project(1,'Watch Finding Nemo','None', new Date(2019,8,25,)),
  new Project(2,'Buy Cookies',"Can't think of any", new Date(2015,2,3)),
  new Project(3, 'Get new Phone Case','Nope', new Date(2022,2,6)),
  new Project(4, 'Get Dog Food','Moving on', new Date(5286,5,8)),
  new Project(5, 'Solve math homework','Lalala', new Date(4657,5,6)),
  new Project(6, 'Plot my world domination plan','Muahahaha!', new Date(5898,2,5)),
 ]
 toggleDetails(index){
   this.projects[index].showDescription = !this.projects[index].showDescription;
 }
 deleteProject(isComplete,index){
  if (isComplete){
    let toDelete=confirm('Are you sure you want to delete this project?')
    
    if(toDelete){
      this.projects.splice(index,1);
      }
      }
    }
    addNewProject(project){
      let projectLength = this.projects.length;
      project.id=projectLength+1;
      project.completeDate = new Date(project.completeDate)
      this.projects.push(project)

  }
  constructor() { }

  ngOnInit() {
  }

}
