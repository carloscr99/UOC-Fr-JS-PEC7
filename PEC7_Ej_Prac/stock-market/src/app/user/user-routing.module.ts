import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from '../login/login.component';
import { RegisterComponent } from '../register/register.component';

const routes: Routes = [
  // {path: 'login', loadChildren: () => import('../login/login.component').then(m => m.LoginComponent)},
  // {path: 'register', loadChildren: () => import('../register/register.component').then(m => m.RegisterComponent)}

  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
