import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
// import { Articles } from '../../modele/list-articles';
import { ARTICLE } from '../../modele/article';
import { CATEGORIE } from 'src/modele/categories';
// import { Categories } from 'src/modele/list-categorie';
import {register} from 'swiper/element/bundle';
import { ServiceTechshopService } from '../service-techshop.service';
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


constructor(private route :Router,private monserv :ServiceTechshopService) { }
   
listCategories : CATEGORIE[]= [];
listArticles:ARTICLE[] =[];

article:ARTICLE|undefined



  gotodetails(article:ARTICLE) {
    
   this.route.navigate(['/details',article]);
  }




  ngOnInit() {

    this.monserv.getcategorie().subscribe((data:CATEGORIE[]) =>{
      this.listCategories = data
      console.table(data)
    } )

    this.monserv.getarticle().subscribe((data1:ARTICLE[]) =>{
      this.listArticles =data1
    } )
   
  }
  handleInput(){

  }

}


