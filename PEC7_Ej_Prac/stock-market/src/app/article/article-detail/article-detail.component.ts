import { Component, Input } from '@angular/core';
import { Article } from '../article-item/Article';
import { ArticleService } from 'src/app/services/article-service.service';
import { ActivatedRoute } from '@angular/router';
import { Observable, map } from 'rxjs';

@Component({
  selector: 'article-detail',
  templateUrl: './article-detail.component.html',
  styleUrls: ['./article-detail.component.css']
})
export class ArticleDetailComponent {

  //@Input() article!: Article;

  public articles: Article[] = Array<Article>();
  public articles$: Observable<Article[]> = new Observable<Article[]>;
  public article: Article | undefined;

  constructor(private articleService: ArticleService, private route: ActivatedRoute){
  
    this.article = {
      id: 0,
      name: '',
      imageUrl: '',
      isOnSale: true,
      price: 0,
      quantityInCart: 0
    }
    
  }

  


  ngOnInit(){
   
    const articleID = this.route.snapshot.paramMap.get('id') ?? '0';

    const id : number = +articleID;

    if(id != 0){

      console.log("el artículo a mostrar es el: ", articleID);

      
      this.articleService.getArticles('').pipe(
        map(articles => articles.find(article => article.id === id))
      ).subscribe(article => this.article = article)


      
     


 
    }



  }



}
