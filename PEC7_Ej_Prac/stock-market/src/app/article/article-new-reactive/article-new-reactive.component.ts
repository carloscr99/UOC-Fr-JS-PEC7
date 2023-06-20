import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder, ValidatorFn, ValidationErrors, AbstractControl } from '@angular/forms';
import { ArticleService } from 'src/app/services/article-service.service';
import { Article } from '../article-item/Article';

@Component({
  selector: 'article-new-reactive',
  templateUrl: './article-new-reactive.component.html',
  styleUrls: ['./article-new-reactive.component.css']
})
export class ArticleNewReactiveComponent {

  

  mensaje = "";
  public article: Article | undefined;

  constructor(private articleSerive:ArticleService, private fb: FormBuilder) {
    this.initializeArticle();
   }

   initializeArticle(){
      this.article = {
        id: 0,
        name: '',
        imageUrl: '',
        price: 0,
        isOnSale: false,
        quantityInCart: 0
      };
   }


   articleForm = this.fb.group({
    name: ['', [Validators.required, this.NameArticleValidator(/\b(Prueba|Test|Mock|Fake)\b/i)]],
    price: [0, [Validators.required, Validators.min(0.1)]],
    urlImage: ['', [Validators.required, Validators.pattern('^(http|https)://[a-zA-Z0-9]+\.([a-zA-Z]{2,3})$')]],
  })

  onSubmit(){
    if(this.articleForm.valid){
    
      let article: Article = {
         id: 0,
         name: this.articleForm.value.name ?? '',
         price: this.articleForm.value.price ?? 0,
         imageUrl: this.articleForm.value.urlImage ?? '',
         isOnSale: true,
         quantityInCart: 0
      };

      this.articleSerive.create(article).subscribe((result: any) => {

        this.mensaje = result.msg;
        this.initializeArticle();

      }, (error => this.mensaje = error.msg));

      
    }
    else{
      this.mensaje = "El artículo no es válido";
    }
  }

  NameArticleValidator(nameRe: RegExp): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const forbidden = nameRe.test(control.value);
      return forbidden ? {forbiddenName: {value: control.value}} : null;
    };
  }

}
