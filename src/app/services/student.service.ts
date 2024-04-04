import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private _ApiService:ApiService) { }

  getAll() :Observable<any> {
    return this._ApiService.get("Student/Get");
  }

  delete(index:number) :Observable<any> {
    return this._ApiService.delete(`Student/Delete?id=${index}`);
  }

  post(student:Object) :Observable<any> {
    return this._ApiService.post("Student/Post", student);
  }
}
