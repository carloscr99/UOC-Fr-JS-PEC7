import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes, PreloadAllModules  } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ArticleListComponent } from './article/article-list/article-list.component';
import { ArticleNewReactiveComponent } from './article/article-new-reactive/article-new-reactive.component';
import { ArticleDetailComponent } from './article/article-detail/article-detail.component';
import { AuthGuard } from './guards/auth.guard';


const appRoutes: Routes = [
  {path: '', redirectTo: 'user/login', pathMatch: 'full' },    
  {path: 'article', loadChildren: () => import('./article/article.module').then(m => m.ArticleModule)},
  {path: 'user', loadChildren: () => import('./user/user.module').then(m => m.UserModule)},
  {path: '**', redirectTo: 'user/register' } //ruta por si escriben algo que no existe en la url   
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
