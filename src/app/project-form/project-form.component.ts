import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Project } from '../project'

@Component({
  selector: 'app-project-form',
  templateUrl: './project-form.component.html',
  styleUrls: ['./project-form.component.css']
})

export class ProjectFormComponent implements OnInit {
        newProject= new Project(0,"","", new Date());
        @Output() addProject=new EventEmitter<Project>();

        submitProject(){
          this.addProject.emit(this.newProject);
        }
  constructor() { }

  ngOnInit() {
  }

}
