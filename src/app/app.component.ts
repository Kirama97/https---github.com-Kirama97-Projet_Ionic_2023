import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ARTICLE } from 'src/modele/article';
import { DetailsPage } from './details/details.page';
import { CATEGORIE } from 'src/modele/categories';
// import { Categories } from 'src/modele/list-categorie';
import {register} from 'swiper/element/bundle';
import { ServiceTechshopService } from './service-techshop.service';
import { Observable } from 'rxjs';
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
  
 
  constructor (private route : Router ,private monserv :ServiceTechshopService){}



  ngOnInit(): void {
    this.monserv.getcategorie().subscribe((data:CATEGORIE[]) =>{
      this.listCategories = data
      console.table(data)
    } )

    this.monserv.getarticle().subscribe((data1:ARTICLE[]) =>{
      this.listArticles =data1
    } )
   
    


  }



gotocategorie(Categories:CATEGORIE){
    
    this.route.navigate(['/categorie-page',Categories]);
 
 }
 goToListe(){
  this.route.navigate(['/list-article'])
 }

}















// import { Component } from '@angular/core';
// import { Router } from '@angular/router';
// import { ARTICLE } from 'src/modele/article';
// import { DetailsPage } from './details/details.page';
// import { CATEGORIE } from 'src/modele/categories';
// import { Categories } from 'src/modele/list-categorie';
// import {register} from 'swiper/element/bundle';
// register();



// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['app.component.scss'],
// })
// export class AppComponent {
 
//   listCategories : CATEGORIE[]= Categories;
//   listArticles:ARTICLE[] | undefined
//   article:ARTICLE|undefined
  
 
//   constructor (private route : Router){}
//   gotocategorie(Categories:CATEGORIE){
//     console.table(Categories);
//      this.route.navigate(['/categorie-page',Categories]);
  
//   }

//   ngOnInit(): void {
   

//   }

//  goToListe(){
//   this.route.navigate(['/list-article'])
//  }


// }
