import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ARTICLE } from '../../modele/article';
import { CATEGORIE } from 'src/modele/categories';
import {register} from 'swiper/element/bundle';
import { ServicesenepharmacieService } from '../service-senepharmacie.service';
import { CART } from 'src/modele/cart';
register();


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage implements OnInit{
  isToastOpen: any;
 
setOpen(arg0: boolean) {
throw new Error('Method not implemented.');
}


constructor(private route :Router,private monserv :ServicesenepharmacieService) { }
   
listCategories : CATEGORIE[]= [];
listArticles:ARTICLE[] =[];

article:ARTICLE|undefined



  gotodetails(article:ARTICLE) {
    
   this.route.navigate(['/details',article]);
  }

  gotomembre(){
    this.route.navigate(['espace-membre']);
  }




  ngOnInit() {

 this.getarticle();
 this.getcategorie()
  

  }
  // categorie

getcategorie(){
  this.monserv.getcategorie().subscribe((data:CATEGORIE[]) =>{
    this.listCategories = data
    console.table(data)
  } )

}
// les articles

getarticle(){
  this.monserv.getarticle().subscribe((data1:ARTICLE[]) =>{
    this.listArticles =data1
  } )
}

// actualisation de la age 

  handleRefresh(event: { target: { complete: () => void; }; }) {
    setTimeout(() => {
      this.getarticle();
      event.target.complete();
    }, 2000);
  } 

}

