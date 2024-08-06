// Import necessary modules
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ARTICLE } from 'src/modele/article';
import { ServicesenepharmacieService } from '../service-senepharmacie.service';
// import { Articles } from 'src/modele/list-articles';

 @Component({
   selector: 'app-recherche',
   templateUrl: './recherche.page.html',
   styleUrls: ['./recherche.page.scss'],
 })
export class RecherchePage implements OnInit {
  listArticles: ARTICLE[]; 
  filteredList: any[]; 

   article:ARTICLE|undefined

  constructor(private route:Router,private monserv :ServicesenepharmacieService) {
    
    this.listArticles = [];
    this.filteredList = this.listArticles; 
  }
   ngOnInit(): void {
     
    this.monserv.getarticle().subscribe((data1:ARTICLE[]) =>{
      this.listArticles =data1
    } )
   }
// pour faire la recherche d'article 

  recherche(event: any) {
    const searchTerm = event.target.value.toLowerCase();

    this.filteredList = this.listArticles.filter((article:any) => {
      return article.titre.toLowerCase().includes(searchTerm) ||
             article.description.toLowerCase().includes(searchTerm);
    });
  }

  // permet de clicker sur un article apres recherche
  
  gotodetails(article:ARTICLE) {
       this.route.navigate(['/details',article]);
        
        }
}



