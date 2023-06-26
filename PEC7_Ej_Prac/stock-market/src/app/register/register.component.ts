import { Component } from '@angular/core';
import { UserService } from '../services/user-service.service';
import { FormBuilder, Validators } from '@angular/forms';
import { User } from '../user/User';
import { Router } from '@angular/router';

@Component({
  selector: 'register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  public user: User;
  public mensaje: String = '';

  constructor(private userService: UserService, private fb: FormBuilder, private router: Router){
    this.user = {
      user: '',
      password: '',
      token: ''
    }
  }

  registerForm = this.fb.group({

    name: ['',Validators.required],
    password: ['',Validators.required]

  });


  onSubmit(){

    if(this.registerForm.valid){

      this.user = {
         user: this.registerForm.value.name ?? '',
         password: this.registerForm.value.password ?? '',
         token: ''
      }

      console.log("usuario: ", this.user);

      this.userService.register(this.user).subscribe((result) =>{
        
        console.log(result);
        this.mensaje = result.msg;
        this.user.token = result.token;

        this.router.navigate(['login']);

      }, (error =>{
        this.mensaje = error.msg;
        console.log("error: ", error);
      }))

    }
    else{
      console.log("Registro no válido");
    }


  }

}
