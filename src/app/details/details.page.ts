import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { ARTICLE } from '../../modele/article';
import { Articles } from '../../modele/list-articles';
import {register} from 'swiper/element/bundle';
import { MenuController } from '@ionic/angular';

register();


@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {
  

  constructor(private route:ActivatedRoute,private router:Router,public menuCtrl:MenuController) { }
  listArticles:ARTICLE[] | undefined
  article:ARTICLE|undefined
  
  ngOnInit() {
    this.listArticles = Articles
    const articleId :string|null =this.route.snapshot.paramMap.get('id')
    if(articleId){
      this.article =this.listArticles.find(article =>article.id == articleId)
    }
  }
  Back(){
    this.router.navigate(['/list-article']);
  }


 
}
