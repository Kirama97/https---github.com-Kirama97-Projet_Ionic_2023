import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ARTICLE } from 'src/modele/article';
import { CATEGORIE } from 'src/modele/categories';
import { Articles } from 'src/modele/list-articles';
import { Categories } from 'src/modele/list-categorie';
import {register} from 'swiper/element/bundle';
register();

@Component({
  selector: 'app-list-article',
  templateUrl: './list-article.page.html',
  styleUrls: ['./list-article.page.scss'],
})
export class ListArticlePage implements OnInit {

  constructor(private route:ActivatedRoute,private router:Router) { }
  listArticles : ARTICLE[] = Articles;
  listCategories : CATEGORIE[]= Categories;
  article:ARTICLE|undefined
  categories!: ARTICLE;
 

  gotodetails(article:ARTICLE) {
   this.router.navigate(['/details',article]);
   
  }

  gotocategorie(Categories:CATEGORIE){
    console.table(Categories);
     this.router.navigate(['/categorie-page',Categories]);
  
  }
  
  ngOnInit() {
    this.listCategories = Categories
    const categorieId:string|null =this.route.snapshot.paramMap.get('id')
    if(categorieId){
      console.log(categorieId);
    }
   
    }
    Back(){
      this.router.navigate(['/home']);
    }

  }



