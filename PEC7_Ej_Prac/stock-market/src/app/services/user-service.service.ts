import { Injectable } from '@angular/core';
import { User } from '../user/User';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private user: User;

  constructor(private http: HttpClient) {

    this.user = {
      user: "",
      password: "",
      token: ""
    }

  }

  login(user: User): Observable<any>{

    return this.http.post('/api/user/login', user);

  }

  register(user: User): Observable<any>{

    return this.http.post('/api/user/register', user);

  }

 
}
