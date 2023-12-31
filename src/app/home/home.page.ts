import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Articles } from '../../modele/list-articles';
import { ARTICLE } from '../../modele/article';
import { CATEGORIE } from 'src/modele/categories';
import { Categories } from 'src/modele/list-categorie';
import {register} from 'swiper/element/bundle';
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


constructor(private route :Router) { }
  listArticles : ARTICLE[] = Articles;
  listCategories : CATEGORIE[]= Categories;


  gotodetails(article:ARTICLE) {
    
   this.route.navigate(['/details',article]);
  }




  ngOnInit() {
  }
  handleInput(){

  }

}


