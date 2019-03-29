import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Project } from'../project'
import { ActivatedRoute, ParamMap } from '@angular/router';
import {ProjectService} from '../projects/project.service'


@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.css'],
  providers:[ProjectService]
})
export class ProjectDetailsComponent implements OnInit {
  project:Project;

  constructor(private route:ActivatedRoute,
    private service:ProjectService) { }
 
  ngOnInit() {
     let id = this.route.snapshot.paramMap.get('id');
     this.project=this.service.getGoal(id)
  }
}
  // @Output() isComplete=new EventEmitter<boolean>();

  // projectDelete(complete:boolean){
  //   this.isComplete.emit(complete)
  // }
 