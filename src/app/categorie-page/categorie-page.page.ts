import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ARTICLE } from 'src/modele/article';
import { CATEGORIE } from 'src/modele/categories';
import { Articles } from 'src/modele/list-articles';
import { Categories } from 'src/modele/list-categorie';
import {register} from 'swiper/element/bundle';
register();

@Component({
  selector: 'app-categorie-page',
  templateUrl: './categorie-page.page.html',
  styleUrls: ['./categorie-page.page.scss'],
})
export class CategoriePagePage implements OnInit {


  constructor(private route:ActivatedRoute,private router:Router) { }
  listCategories : CATEGORIE[]= Categories; //tableau des categorie
  Onecategorie:CATEGORIE|undefined; //un categorie
  listArticles : ARTICLE[] = Articles;
  article:ARTICLE|undefined

  
  ngOnInit() {
const categorieId:string|null =this.route.snapshot.paramMap.get('id')
if (categorieId) {
  this.Onecategorie = this.listCategories.find(Categorie => Categorie.id == +categorieId)
  
}  
  }
  Back(){
    this.router.navigate(['/list-article']);
  }

  gotodetails(article:ARTICLE) {
    this.router.navigate(['/details',article]);
    
   }
   gotocategorie(Categories:CATEGORIE){
    console.table(Categories);
     this.router.navigate(['/categorie-page',Categories]);
  
  }

}
