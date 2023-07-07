import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from '../login/login.component';
import { RegisterComponent } from '../register/register.component';


@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    UserRoutingModule,
    ReactiveFormsModule
  ]
})
export class UserModule { }
