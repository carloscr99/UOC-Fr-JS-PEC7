import { Component } from '@angular/core';
import { Article } from '../article-item/Article';
import { NgForm } from '@angular/forms';
import { createJsxSelfClosingElement } from 'typescript';

@Component({
  selector: 'article-new-template',
  templateUrl: './article-new-template.component.html',
  styleUrls: ['./article-new-template.component.css']
})
export class ArticleNewTemplateComponent {

  public articulo: Article;
 

  constructor(){
    this.articulo = {
      id: 0,
      name: '',
      price: 0,
      imageUrl: '',
      isOnSale: true,
      quantityInCart: 0
    };
  }

  createArticle(article: NgForm){

    if(article.valid){
      this.articulo = article.value;

      console.log('a? ->', this.articulo);
    }else{
      console.log("no valido");
      return;
    }

  }

}
