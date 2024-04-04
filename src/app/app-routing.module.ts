import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';
import { DetailsComponent } from "./components/details/details.component";
import { EmployeeComponent } from "./components/employee/employee.component";
import { LoginComponent } from "./components/login/login.component";
import { StudentsComponent } from "./components/students/students.component";
import { TaskComponent } from "./components/task/task.component";

const routes: Routes = [
  {path:'details/:id', component:DetailsComponent},
  {path:'task', component:TaskComponent},
  {path:'students', component:StudentsComponent},
  {path:'', component:EmployeeComponent},
  {path:'home', component:EmployeeComponent},
  {path:'login', component:LoginComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)], 
  exports: [RouterModule]
})
export class AppRoutingModule { }
