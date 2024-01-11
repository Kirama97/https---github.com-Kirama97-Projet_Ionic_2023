import { ARTICLE } from "./article";


export interface CART{
  
    id: number;
    article:ARTICLE;
    quantite :number;
    somme:number
}