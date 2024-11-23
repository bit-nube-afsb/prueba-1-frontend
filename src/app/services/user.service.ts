import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TokenResponse, User, UserDTO } from '../models/users.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private URL = `${environment.baseUrl}/users`;
  constructor(private http: HttpClient) { }

  listUsers() : Observable<User[]>{
    return this.http.get<User[]>(`${this.URL}/get-users`);
  }

  login(user: UserDTO) : Observable<TokenResponse>{
    return this.http.post<TokenResponse>(`${this.URL}/login`,user)
  }
}
