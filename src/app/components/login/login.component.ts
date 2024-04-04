import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formLogin:FormGroup;
  constructor(private _formBuilder:FormBuilder) { }

  ngOnInit(): void {
    this.formLogin= this._formBuilder.group({
      Email:['', [Validators.email]],
      Password:[''],
    });

    
  }

}
