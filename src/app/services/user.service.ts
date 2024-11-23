import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/users.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private URL = `${environment.baseUrl}/users`;
  constructor(private http: HttpClient) { }

  listUsers() : Observable<User>{
    return this.http.get<User>(`${this.URL}/get-users`);
  }
}
