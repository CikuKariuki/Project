import { Injectable } from '@angular/core';
import {Projects} from "../projects"

@Injectable( )

export class ProjectService {
  getProjects(){
    return Projects;
  }
  getGoal(id){
    for (let project of Projects){
        if (project.id == id){
            return project;
        }
    }
  }
  constructor() { }
}
