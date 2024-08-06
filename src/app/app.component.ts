import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ARTICLE } from 'src/modele/article';
import { DetailsPage } from './details/details.page';
import { CATEGORIE } from 'src/modele/categories';
// import { Categories } from 'src/modele/list-categorie';
import {register} from 'swiper/element/bundle';
import { ServicesenepharmacieService } from './service-senepharmacie.service';
import { Observable } from 'rxjs';
import { CART } from 'src/modele/cart';
register();



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
 
  listCategories : CATEGORIE[]= [];
  listArticles:ARTICLE[] =[];
  article:ARTICLE|undefined
  panier :CART[]=[]
  public indice :number = 0
  
 
  constructor (private route : Router ,private monserv :ServicesenepharmacieService){}



  ngOnInit(): void {

    this.monserv.getcategorie().subscribe((data:CATEGORIE[]) =>{
      this.listCategories = data
      console.table(data)
    } )

    this.monserv.getarticle().subscribe((data1:ARTICLE[]) =>{
      this.listArticles =data1
    } )
   
    this.getpanier()
    this.indice

  }



gotocategorie(Categories:CATEGORIE){
    this.route.navigate(['/categorie-page',Categories]);
 }
 goToListe(){
  this.route.navigate(['/list-article'])
 }

 getpanier(){
  this.monserv.getCart().subscribe((data:CART[]) =>{
    this.panier =data;
    this.indice = data.length
    console.log(this.indice)
 } )
}
gotopanier(){
  this.route.navigate(['/panier']);
}

}

