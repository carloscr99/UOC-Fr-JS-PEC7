import { Injectable } from '@angular/core';
import { Article } from '../article/article-item/Article';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class ArticleService {


  private articulos: Article[];

  constructor(private http: HttpClient) {

    this.articulos = []

   }

   getArticles(query: string) : Observable<Article[]> {
    return this.http.get<Article[]>(`/api/articles?q=${query}`);
  }

  changeQuantity(article: Article, operation: number):Observable<Article> {

    console.log("changeQuantity article-service -> " + article.quantityInCart);
   
    return this.http.patch<Article>('api/articles/'+ article.id,  {
      changeInQuantity: operation
      
    });
    
  }

  create(article: Article): Observable<any> {
    
    return this.http.post('/api/articles', article);
    
  }


}
