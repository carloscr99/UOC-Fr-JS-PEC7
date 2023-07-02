import { Injectable } from '@angular/core';
import { User } from '../user/User';

@Injectable({
  providedIn: 'root'
})
export class UserStoreService {

  private currentUser: User | null;
  
  constructor() { 
    this.currentUser = null;
  }

  setCurrentUser(user: User): void{
    this.currentUser = user;
    console.log('UserStoreService ->', this.currentUser.token);
    localStorage['userToken'] = this.currentUser.token;
  }

  isLoggedIn(): boolean{

    console.log('isLoggedIn ->', this.currentUser)

    return this.currentUser?.token !== '' && this.currentUser !== null;

  }

}
