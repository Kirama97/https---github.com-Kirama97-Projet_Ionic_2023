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
export class ServiceTechshopService {

  constructor(private http: HttpClient) { }
  getarticle(): Observable<Array<ARTICLE>> {

    return this.http.get <Array<ARTICLE>>(`${URL_API}/article`)
  }
  getcategorie(): Observable<Array<CATEGORIE>> {

    return this.http.get <Array<CATEGORIE>>(`${URL_API}/categorie`)
  }

     getCart(): Observable<Array<CART>>{
       return this.http.get  <Array<CART>>(`${URL_API}/panier`)
   }

   delete(id:number) {
    return this.http.delete(`${URL_API}/panier/${id}`);
  }
 
  viderPanier(): Observable<any> {
    return this.http.delete(`${URL_API}/panier`);
  }
  
   ajout(article:ARTICLE){
     return this.http.post(`${URL_API}/panier`,{article,quantite:1 ,somme:article.prix})
   
  }

   // Nouvelle méthode pour calculer la somme totale
   getSommeTotale(): Observable<number> {
    return this.getCart().pipe(
      map(cartItems => cartItems.reduce((acc, item) => acc + item.somme, 0))
    );
  }

  // Nouvelle méthode pour mettre à jour la somme après la suppression d'un élément
  updateSommeTotaleAfterDelete(id: number): Observable<any> {
    return this.delete(id).pipe(
      switchMap(() => this.getSommeTotale()),
    );
  }
   

 }





