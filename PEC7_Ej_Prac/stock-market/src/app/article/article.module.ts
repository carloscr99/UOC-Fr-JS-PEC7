import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArticleRoutingModule } from './article-routing.module';
import { ArticleNewReactiveComponent } from './article-new-reactive/article-new-reactive.component';
import { ArticleDetailComponent } from './article-detail/article-detail.component';
import { ArticleListComponent } from './article-list/article-list.component';
import { imageUrlPipe } from '../imageUrl.pipe';
import { ImageUrlPipeModule } from '../image-url.pipe.module';
import { ArticleItemComponent } from './article-item/article-item.component';


@NgModule({
  declarations: [
    ArticleNewReactiveComponent,
    ArticleDetailComponent,
    ArticleListComponent,
    ArticleItemComponent
  ],
  imports: [
    CommonModule,
    ArticleRoutingModule,
    ImageUrlPipeModule
  ]
})
export class ArticleModule { }
