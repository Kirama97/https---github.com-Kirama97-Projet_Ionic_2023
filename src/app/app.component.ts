import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ARTICLE } from 'src/modele/article';
import { DetailsPage } from './details/details.page';
import { CATEGORIE } from 'src/modele/categories';
import { Categories } from 'src/modele/list-categorie';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
 
  listCategories : CATEGORIE[]= Categories;
  listArticles:ARTICLE[] | undefined
  article:ARTICLE|undefined
  
 
  constructor (private route : Router){}

gotocategorie(Categories:CATEGORIE){
  console.log('categorie');

}

  ngOnInit(): void {
    console.table(Categories)
  }

 goToListe(){

  this.route.navigate(['/list-article'])
 }

}
