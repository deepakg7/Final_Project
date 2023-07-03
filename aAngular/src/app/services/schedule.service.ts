import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ScheduleService {

  private baseurl:string="http://localhost:8087/schtour/addTour"

  constructor(private http:HttpClient) { }

 addTourdata(sdata:any)

 {

  return this.http.post(`${this.baseurl}`,sdata)

 }
}
