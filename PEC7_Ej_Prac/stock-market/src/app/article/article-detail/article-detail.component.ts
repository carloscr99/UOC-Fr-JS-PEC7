import { Component, Input } from '@angular/core';
import { Article } from '../article-item/Article';

@Component({
  selector: 'article-detail',
  templateUrl: './article-detail.component.html',
  styleUrls: ['./article-detail.component.css']
})
export class ArticleDetailComponent {

  @Input() article!: Article;

  constructor(){
    console.log("ArticleDetailComponent?");
  }

}
