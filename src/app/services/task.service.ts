import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from "../../environments/environment";
import { TaskRow } from "../models";

@Injectable({ providedIn: 'root'})
export class TaskService {
    private base = environment.apiBaseUrl;

    constructor(private http: HttpClient){}

    list(): Observable<TaskRow[]>  {
    const url = `${this.base}/tasks`;   
    console.log('GET', url);
    return this.http.get<TaskRow[]>(url);
  }
    get(id: number): Observable<TaskRow> {
    const url = `${this.base}/tasks/${id}`; 
    console.log('GET', url);
    return this.http.get<TaskRow>(url);
  }
}
