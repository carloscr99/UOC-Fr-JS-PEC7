import { Injectable } from '@angular/core';
import { User } from '../user/User';

@Injectable({
  providedIn: 'root'
})
export class UserStoreService {

  private currentUser: User;
  
  constructor() { 
    this.currentUser = {
      user: '',
      password: '',
      token: ''
    };
  }

  setCurrentUser(user: User): void{
    this.currentUser = user;
    console.log('UserStoreService ->', this.currentUser.token);
    localStorage['userToken'] = this.currentUser.token;
  }

  isLoggedIn(): boolean{

    console.log('isLoggedIn ->', this.currentUser.token)

    return this.currentUser.token !== '' && this.currentUser.token !== undefined;

  }

}
