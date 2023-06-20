import { Component, OnInit } from '@angular/core';
import { Article } from '../article-item/Article';
import { ArticleQuantityChange } from '../article-item/ArticleQuantityChange';
import { ArticleService } from 'src/app/services/article-service.service';
import { Observable, Subject, debounceTime, distinctUntilChanged, startWith, switchMap } from 'rxjs';

@Component({
  selector: 'article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.css']
})
export class ArticleListComponent implements OnInit {


  public articles$: Observable<Article[]> = new Observable<Article[]>;
  public searchString: string = '';
  
  private searchTerms: Subject<string> = new Subject();


  constructor(private articleService: ArticleService) {


  }


  ngOnInit() {

    this.articles$ = this.searchTerms.pipe(
      startWith(this.searchString),
      debounceTime(500),
      distinctUntilChanged(),
      switchMap((query) => this.articleService.getArticles(query))
    );
    
  }

  buscarArticulo(){
    this.searchTerms.next(this.searchString);
  }


}
