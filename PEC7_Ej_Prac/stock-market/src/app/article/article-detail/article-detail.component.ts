import { Component } from '@angular/core';

@Component({
  selector: 'article-detail',
  templateUrl: './article-detail.component.html',
  styleUrls: ['./article-detail.component.css']
})
export class ArticleDetailComponent {

  constructor(){
    console.log("ArticleDetailComponent?");
  }

}
