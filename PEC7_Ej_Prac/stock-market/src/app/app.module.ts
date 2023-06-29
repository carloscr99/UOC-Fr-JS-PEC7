import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';

import { AppComponent } from './app.component';
import { ArticleItemComponent } from './article/article-item/article-item.component';
import { ArticleListComponent } from './article/article-list/article-list.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ArticleNewTemplateComponent } from './article/article-new-template/article-new-template.component';
import { ArticleNewReactiveComponent } from './article/article-new-reactive/article-new-reactive.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http'; 
import { imageUrlPipe } from './imageUrl.pipe';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ArticleDetailComponent } from './article/article-detail/article-detail.component';
import { AppRoutesModule } from './app-routes.module';
import { AuthGuard } from './guards/auth.guard';
import { ArticleAppInterceptor } from './services/article-app.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    ArticleItemComponent,
    ArticleListComponent,
    NavbarComponent,
    ArticleNewTemplateComponent,
    ArticleNewReactiveComponent,
    imageUrlPipe,
    LoginComponent,
    RegisterComponent,
    ArticleDetailComponent
    ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutesModule
  ],
  providers: [
    AuthGuard,                       
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ArticleAppInterceptor,
      multi: true,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
