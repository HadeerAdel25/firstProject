import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Task } from 'src/app/models/task';
import { TaskService } from "src/app/services/task.service";

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  task:Task = new Task();
  constructor(private _taskService:TaskService, private _router:Router, private _activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this._activatedRoute.paramMap.subscribe(param=>{
      let id:number =Number(param.get('id'));
      this.getTaskByID(id);
    })
  }

  getTaskByID(id:number)
  {
    this._taskService.getByID(id).subscribe(
      (response):any=>{
        this.task = response.Data;
      },
      (error:any)=>{
        console.log("not found");
      }
      );
  }

}
