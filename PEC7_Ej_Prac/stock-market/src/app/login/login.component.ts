import { Component } from '@angular/core';
import { User } from '../user/User';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {


  public user: User | undefined;

  constructor(private fb: FormBuilder){
    this.initializeUser();
  }

  initializeUser(){
    this.user = {
      user: "",
      password: "",
      token: ""
    }
  }

  loginForm = this.fb.group({
    name: ['', Validators.required],
    password: ['', Validators.required]
  })

  onSubmit(){

    if(this.loginForm.valid){
    
      let user: User = {
        user: this.loginForm.value.name ?? '',
        password: this.loginForm.value.password ?? '',
        token: ''
      }

      console.log("Formulario válido -> ", user);

    }
    else{
      console.log("Formulario inválido");
    }

  }

}
