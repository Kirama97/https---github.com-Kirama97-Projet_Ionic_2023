
import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { ARTICLE, disponibilite } from 'src/modele/article';
import { ServiceTechshopService } from '../service-techshop.service';


@Component({
  selector: 'app-ajout-article',
  templateUrl: './ajout-article.page.html',
  styleUrls: ['./ajout-article.page.scss'],
})
export class AjoutArticlePage implements OnInit {
New :ARTICLE; 

listArticles:ARTICLE[] =[];
article:ARTICLE|undefined 
constructor(private serv :ServiceTechshopService) { 
  
  this.New = {} as ARTICLE
  this.New.disponibilite= {} as disponibilite 
  this.New.image = [];
  this.New.etoile=[1,2,3]

}
    
  ngOnInit() {
   
  }

  create(New: ARTICLE){
    this.serv.newArticle(New).subscribe(()=>{
      console.log("new =" , this.New);
    })
  }

  ajoutimage(){
    
  }
}
