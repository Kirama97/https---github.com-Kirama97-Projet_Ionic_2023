import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ARTICLE } from 'src/modele/article';
import { CATEGORIE } from 'src/modele/categories';
import {register} from 'swiper/element/bundle';
import { ServicesenepharmacieService } from '../service-senepharmacie.service';
register();

@Component({
  selector: 'app-list-article',
  templateUrl: './list-article.page.html',
  styleUrls: ['./list-article.page.scss'],
})
export class ListArticlePage implements OnInit {

  constructor(private route:ActivatedRoute,private router:Router ,private monserv :ServicesenepharmacieService) { }
  listArticles : ARTICLE[] = [];
  listCategories : CATEGORIE[]= [];
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

    this.monserv.getcategorie().subscribe((data:CATEGORIE[]) =>{
      this.listCategories = data
      console.table(data)

      const categorieId:string|null =this.route.snapshot.paramMap.get('id')
    if(categorieId){
       console.log(categorieId);
     }
    } )

  
    }
    Back(){
      this.router.navigate(['/home']);
    }

  }



