import { ARTICLE } from "./article";


export interface CART{
    next(panier: CART[]): unknown;
    id: any;
 
    article:ARTICLE;
    quantite :number;
    somme:number
}