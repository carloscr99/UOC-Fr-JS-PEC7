import { Component, OnInit } from '@angular/core';
import { User } from '../user/User';
import { FormBuilder, Validators } from '@angular/forms';
import { UserService } from '../services/user-service.service';
import { Router } from '@angular/router';
import { UserStoreService } from '../services/user-store.service';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  public user: User;
  public mensaje: String = "";

  constructor(private userService: UserService, private fb: FormBuilder, private router: Router, private userStoreService: UserStoreService){
    this.user = {
      user: "",
      password: "",
      token: ""
    }
  }

  ngOnInit(){
    let userToken = localStorage['userToken'];

    if(userToken !== null || userToken !== undefined){
      this.user.token = userToken;
      this.userStoreService.setCurrentUser(this.user);
      this.router.navigate(['article/create']);
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

      this.userService.login(user).subscribe((result) =>{

        this.mensaje = result.msg;
        this.user.token = result.token;
        console.log("Resultado login: " , result);

        this.userStoreService.setCurrentUser(this.user);

        this.router.navigate(['article/list']);

      }, (error => {
        this.mensaje = error.msg;
        console.log("Resultado login: " , this.mensaje);
      }));

     


    }
    else{
      console.log("Formulario inválido");
    }

  }

}
