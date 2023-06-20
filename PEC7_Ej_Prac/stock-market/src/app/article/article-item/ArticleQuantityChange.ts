import { Article } from "./Article";

export class ArticleQuantityChange{

    public art: Article;
    public quantity: number;

    constructor(){
    
        this.art = {
         id: 0,
         name: '',
         price: 0,
         imageUrl: '',
         isOnSale: true,
         quantityInCart: 0
       };

        this.quantity = 0;
    }

}