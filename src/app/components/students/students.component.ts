import { Component, OnInit } from '@angular/core';
import { Students } from '../../models/students';
import { StudentService } from "../../services/student.service";


@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {
 students:Students[]=[];
  constructor(private _studentService:StudentService) { 
    
  }
  
  addStudent(newName:string, newMobile:string, newEmail:string, newNationalID:string, newAge:string){
    const student:Students = new Students();
    student.Name = newName;
    student.Mobile = newMobile;
    student.Email = newEmail;
    student.Age = parseInt(newAge) ;
    student.NationalID = newNationalID;
    this._studentService.post(student).subscribe(
      (response:any)=> {
        this.students.push(student);
      },
      (error)=> {}
    );
  }

  deleteStudent(index:number){
    this._studentService.delete(index).subscribe(
      (response:any)=> {
        this.students.splice(index,1);
      },
      (error:any)=> {}
    );
    
  }
  ngOnInit(): void {
    this._studentService.getAll().subscribe(
      (response:any)=> {
        this.students = response.Data;
      },
      (error:any)=> {}
    );
  }

}
