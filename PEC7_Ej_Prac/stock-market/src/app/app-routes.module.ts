import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ArticleListComponent } from './article/article-list/article-list.component';
import { ArticleNewReactiveComponent } from './article/article-new-reactive/article-new-reactive.component';
import { ArticleDetailComponent } from './article/article-detail/article-detail.component';


const appRoutes: Routes = [
  {path: '', redirectTo: '/login', pathMatch: 'full' },    
  {path: 'login', component: LoginComponent}, 
  {path: 'register' , component: RegisterComponent},
  {path: 'article/list', component: ArticleListComponent},
  {path: 'article/create', component: ArticleNewReactiveComponent},
  {path: 'article/:id', component: ArticleDetailComponent},
  {path: '**', redirectTo: '/register' } //ruta por si escriben algo que no existe en la url   
]



@NgModule({
  declarations: [],
  imports: [
    //CommonModule
    RouterModule.forRoot(appRoutes)
  ], 
  exports: [
    RouterModule
  ]
})
export class AppRoutesModule { }
