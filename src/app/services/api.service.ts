import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private _httpClient:HttpClient) { }

  get(url:string) :Observable<any> {
    return this._httpClient.get(`${environment.mainUrl}/${url}`);
  }

  delete(url:string) :Observable<any> {
    return this._httpClient.delete(`${environment.mainUrl}/${url}`);
  }

  post(url:string, body:any) :Observable<any> {
    return this._httpClient.post(`${environment.mainUrl}/${url}`, body);
  }

  put(url:string, body:any) :Observable<any> {
    return this._httpClient.put(`${environment.mainUrl}/${url}`, body);
  }
}
