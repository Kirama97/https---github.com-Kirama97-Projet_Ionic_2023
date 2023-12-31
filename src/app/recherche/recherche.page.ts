// Import necessary modules
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ARTICLE } from 'src/modele/article';
import { Articles } from 'src/modele/list-articles';

 @Component({
   selector: 'app-recherche',
   templateUrl: './recherche.page.html',
   styleUrls: ['./recherche.page.scss'],
 })
export class RecherchePage implements OnInit {
  listArticles: ARTICLE[]; 
  filteredList: any[]; 

   article:ARTICLE|undefined

  constructor(private route:Router) {
    
    this.listArticles = Articles;
    this.filteredList = this.listArticles; 
  }
   ngOnInit(): void {
     throw new Error('Method not implemented.');
   }

  recherche(event: any) {
    const searchTerm = event.target.value.toLowerCase();

    this.filteredList = this.listArticles.filter((article:any) => {
      return article.titre.toLowerCase().includes(searchTerm) ||
             article.description.toLowerCase().includes(searchTerm);
    });
  }

  gotodetails(article:ARTICLE) {
       this.route.navigate(['/details',article]);
        
        }
}



