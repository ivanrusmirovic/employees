import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IEntity } from '../models/entityModel';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  
  constructor(private http:HttpClient) { }
  
  private api = 'https://rc-vault-fap-live-1.azurewebsites.net/api/gettimeentries?code=vO17RnE8vuzXzPJo5eaLLjXjmRW07law99QTD90zat9FfOQJKKUcgQ==';
  
  getEmployees():Observable<IEntity[]> {//getTimeEntities
    return this.http.get<IEntity[]>(this.api);
  }
  
}