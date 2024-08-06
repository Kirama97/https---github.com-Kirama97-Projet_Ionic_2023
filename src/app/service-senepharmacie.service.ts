import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, map, switchMap } from 'rxjs';
import { ARTICLE } from 'src/modele/article';
import { CART } from 'src/modele/cart';
import { CATEGORIE } from 'src/modele/categories';


  const URL_API ="http://localhost:3000";

@Injectable({
  providedIn: 'root'
})
export class ServicesenepharmacieService {

  constructor(private http: HttpClient) { }

  // Pour la recuperation de tout mes article avec le json server   (techshop.json)

  getarticle(): Observable<Array<ARTICLE>> {

    return this.http.get <Array<ARTICLE>>(`${URL_API}/article`)
  }

    // Pour la recuperation de tout mes categorie avec le json server   (techshop.json)

  getcategorie(): Observable<Array<CATEGORIE>> {

    return this.http.get <Array<CATEGORIE>>(`${URL_API}/categorie`)
  }
    // Pour la recuperation des article sur mon panier avec le json server   (senepharmacie.json)

     getCart(): Observable<Array<CART>>{
       return this.http.get<Array<CART>>(`${URL_API}/panier`)
   }

  //  pour la suppression d'un article deja dans le panier

   delete(id:number) {
    return this.http.delete(`${URL_API}/panier/${id}`);
  }
 
  // cette methode ne marche pas pour vidé le tableau peut etre je trouverais une solution
  viderPanier(): Observable<any> {
    
    return this.http.delete(`${URL_API}/panier[]`);
  }

  
  
  // pour ajouter article dans le panier ;mon probleme c'est incrementé la quantité

   ajout(article:ARTICLE){
     return this.http.post(`${URL_API}/panier`,{article,quantite:1 ,somme:article.prix})
   
  }

  //  pour la creation d'un nouveau article

  newArticle(New :ARTICLE){
    return this.http.post(`${URL_API}/article`,(New))

  }


   // Nouvelle méthode pour calculer la somme totale  au niveau des articles du panier
   getSommeTotale(): Observable<number> {
    return this.getCart().pipe(
      map(cartItems => cartItems.reduce((acc, item) => acc + item.somme, 0))
    );
  }

  // Nouvelle méthode pour mettre à jour la somme après la suppression d'un élément dans le panier
  updateSommeTotaleAfterDelete(id: number): Observable<any> {
    return this.delete(id).pipe(
      switchMap(() => this.getSommeTotale()),
    );
  }
   

 }
