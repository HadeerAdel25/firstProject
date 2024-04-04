import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private _ApiService:ApiService) { }

  getAll() :Observable<any> {
    return this._ApiService.get("Task/Get");
  }

  delete(index:number) :Observable<any> {
    return this._ApiService.delete(`Task/Delete?id=${index}`);
  }

  post(tasks:Object) :Observable<any> {
    return this._ApiService.post("Task/POST", tasks);
  }

  put(tasks:Object) :Observable<any> {
    return this._ApiService.put("Task/PUT", tasks);
  }

  getByID(index:number) :Observable<any> {
    return this._ApiService.get(`Task/GetByID?id=${index}`);
  }
}
