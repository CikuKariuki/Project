import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Project } from'../project'

@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.css']
})
export class ProjectDetailsComponent implements OnInit {
  @Input() project:Project;
  @Output() isComplete=new EventEmitter<boolean>();

  projectDelete(complete:boolean){
    this.isComplete.emit(complete)
  }
  constructor() { }

  ngOnInit() {
  }

}
