import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ARTICLE } from 'src/modele/article';
import { CATEGORIE } from 'src/modele/categories';
// import { Articles } from 'src/modele/list-articles';
// import { Categories } from 'src/modele/list-categorie';
import {register} from 'swiper/element/bundle';
import { ServiceTechshopService } from '../service-techshop.service';
register();

@Component({
  selector: 'app-categorie-page',
  templateUrl: './categorie-page.page.html',
  styleUrls: ['./categorie-page.page.scss'],
})
export class CategoriePagePage implements OnInit {


  constructor(private route:ActivatedRoute,private router:Router, private monserv :ServiceTechshopService) { }

  listCategories : CATEGORIE[]= []; //tableau des categorie
  Onecategorie:CATEGORIE|undefined; //un categorie
  listArticles : ARTICLE[] = [];
  article:ARTICLE|undefined

  
  ngOnInit() {
    this.monserv.getcategorie().subscribe((data:CATEGORIE[]) =>{
      this.listCategories = data
      console.table(data)


const categorieId:string|null =this.route.snapshot.paramMap.get('id')
if (categorieId) {
  this.Onecategorie = this.listCategories.find(Categorie => Categorie.id == +categorieId)
  
}
} )

  }

  // la fonction back pour retourner dans la page list-article
  Back(){
    this.router.navigate(['/list-article']);
  }
 
    // la fonction de voir les details d'un article ,quand je click sur un article il me dirige sur les details de cette article en passant en parametre l'article en question
  gotodetails(article:ARTICLE) {
    this.router.navigate(['/details',article]);
    
   }
  //  meme procesus pour voir les article d'un categorie
  
   gotocategorie(Categories:CATEGORIE){
    console.table(Categories);
     this.router.navigate(['/categorie-page',Categories]);
  
  }

}
