import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../guards/auth.guard';
import { ArticleListComponent } from './article-list/article-list.component';
import { ArticleNewReactiveComponent } from './article-new-reactive/article-new-reactive.component';
import { ArticleDetailComponent } from './article-detail/article-detail.component';

const routes: Routes = [
  // {path: 'list', loadChildren: () => import('../article/article-list/article-list.component').then(m => m.ArticleListComponent) },
  // {path: 'create', loadChildren: () => import('../article/article-new-reactive/article-new-reactive.component').then(m => m.ArticleNewReactiveComponent), canActivate: [AuthGuard] },
  // {path: ':id', loadChildren: () => import('../article/article-detail/article-detail.component').then(m => m.ArticleDetailComponent), canActivate: [AuthGuard] },

  {path: 'list', component: ArticleListComponent},
  {path: 'create', component: ArticleNewReactiveComponent, canActivate: [AuthGuard] },
  {path: ':id', component: ArticleDetailComponent, canActivate: [AuthGuard] },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ArticleRoutingModule { }
