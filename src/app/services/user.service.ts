import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http'; 
import { environment } from '../../environments/environment';
import { UserRow } from '../models/user.model';
import { Observable } from 'rxjs';




@Injectable({ providedIn: 'root' })
export class UserService {
  private base = environment.apiBaseUrl;

  constructor(private http: HttpClient) {}

  list(): Observable<UserRow[]> {
    
    
    return this.http.get<UserRow[]>(`${this.base}/users`);
  }

  get(id: number): Observable<UserRow> {
    return this.http.get<UserRow>(`${this.base}/users/${id}`);
  }
}

