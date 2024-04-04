import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import {MatToolbarModule} from '@angular/material/toolbar';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeComponent } from './components/employee/employee.component';
import { StudentsComponent } from './components/students/students.component';
import { TaskComponent } from './components/task/task.component';
import { HeaderComponent } from './components/header/header.component';
import { DetailsComponent } from './components/details/details.component';
import { MaxLengthPipe } from './pipes/max-length.pipe';
import { LoginComponent } from './components/login/login.component';


@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    StudentsComponent,
    TaskComponent,
    HeaderComponent,
    DetailsComponent,
    MaxLengthPipe,
    LoginComponent 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    FormsModule, 
    MatToolbarModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
