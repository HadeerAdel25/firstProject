import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/app/services/task.service';
import { Task } from '../../models/task';


@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

  name:string ="Hadeer Adel";
  tasks:Task[]=[];
  isLoadingData = true;
  constructor(private _taskService:TaskService) { }

  ngOnInit(): void {
    this._taskService.getAll().subscribe(  
      (response:any)=> {
        this.tasks = response.Data;
        this.isLoadingData = false;
      },
    (reject:any)=> {})
  }

  addTask(title:string){
    let task = new Task();
    task.Title = title;
    this._taskService.post(task).subscribe(
    (response:any)=>{
      task.ID = response.Data;
      this.tasks.push(task);
    },
    (error:any)=>{}
    );
  }

  updateTask(task:Task){ 
    task.IsDone =! task.IsDone;
    this._taskService.put(task).subscribe(
      (response:any)=>{},
      (error:any)=>{
        task.IsDone =! task.IsDone;
      }
    );
    
  }
  deleteTask(index:number){
    let task = this.tasks[index].ID;
    this._taskService.delete(task).subscribe(
      (response:any)=>{
        this.tasks.splice(index,1);
      },
      (error:any)=>{}
    );
   
  }

  getPendingTasksCount():number{
    return this.tasks.filter(task=>!task.IsDone).length;
  }


}
