import { formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Employee } from '../../models/employee';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  
  employee:Employee = new Employee();
  imageUrl:string = "https://icons.iconarchive.com/icons/gianni-polito/colobrush/128/software-quicktime-icon.png"
  
 
  constructor() {
    this.employee.firstName = "hadeer";
    this.employee.lastName = "adel";
    this.employee.age = 26;
   }

   changeFirstName(newName:string){
    this.employee.firstName = newName;
   }

  length:number=0;
  arr:string[] = [];
  addNames(firstName:string, lastName:string):void{
    if(firstName != "" && firstName != null)
    {
      this.arr.push(firstName + ' '+ lastName);
      this.length= this.arr.length;
    }
    console.log(this.arr);
  }


  employeesArr:Employee[] =[];

  deleteRow(index:number){
    this.employeesArr.splice(index,1);
  }

  goToTask()
  {
    alert("Go to Task?");

  }

  ngOnInit(): void {
    const date ='Wed Feb 20 2019 00:00:00 GMT-0400 (Atlantic Standard Time)';
    const time = '7:00 AM';
    const t1: any = time.split(' ');
    const t2: any = t1[0].split(':');
    t2[0] = (t1[1] === 'PM' ? (1*t2[0] + 12) : t2[0]);
    const time24 = (t2[0] < 10 ? '0' + t2[0] : t2[0]) + ':' + t2[1];
    const completeDate = date.replace("00:00", time24.toString());
    const ff:Date = new Date(completeDate);
    console.log(formatDate(ff,'YYYY-MM-dd mm:hh:ss','en-US'));
  }

}
